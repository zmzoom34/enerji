
/* =====================================================================================

SCORM wrapper v1.1.7 by Philip Hutchison, May 2008 (http://pipwerks.com).

Copyright (c) 2008 Philip Hutchison
MIT-style license. Full license text can be found at 
http://www.opensource.org/licenses/mit-license.php

This wrapper is designed to work with both SCORM 1.2 and SCORM 2004.

Based on APIWrapper.js, created by the ADL and Concurrent Technologies
Corporation, distributed by the ADL (http://www.adlnet.gov/scorm).

SCORM.API.find() and SCORM.API.get() functions based on ADL code,
modified by Mike Rustici (http://www.scorm.com/resources/apifinder/SCORMAPIFinder.htm),
further modified by Philip Hutchison

======================================================================================== */


var pipwerks = {};									//pipwerks 'namespace' helps ensure no conflicts with possible other "SCORM" variables
pipwerks.UTILS = {};								//For holding UTILS functions
pipwerks.debug = { isActive: true }; 				//Enable (true) or disable (false) for debug mode

pipwerks.SCORM = {									//Define the SCORM object
    version: null,              					//Store SCORM version.
    handleCompletionStatus: true,					//Whether or not the wrapper should automatically handle the initial completion status
    handleExitMode: true,							//Whether or not the wrapper should automatically handle the exit mode
    API: {
        handle: null,
        isFound: false
    },					//Create API child object
    connection: { isActive: false },				//Create connection child object
    data: {
        completionStatus: null,
        exitStatus: null
    },				//Create data child object
    debug: {}                 					//Create debug child object
};



/* --------------------------------------------------------------------------------
   pipwerks.SCORM.isAvailable
   A simple function to allow Flash ExternalInterface to confirm 
   presence of JS wrapper before attempting any LMS communication.

   Parameters: none
   Returns:    Boolean (true)
----------------------------------------------------------------------------------- */

pipwerks.SCORM.isAvailable = function () {
    return true;
};



// ------------------------------------------------------------------------- //
// --- SCORM.API functions ------------------------------------------------- //
// ------------------------------------------------------------------------- //


/* -------------------------------------------------------------------------
   pipwerks.SCORM.API.find(window)
   Looks for an object named API in parent and opener windows
   
   Parameters: window (the browser window object).
   Returns:    Object if API is found, null if no API found
---------------------------------------------------------------------------- */

pipwerks.SCORM.API.find = function (win) {

    var API = null,
		findAttempts = 0,
        findAttemptLimit = 500,
		traceMsgPrefix = "SCORM.API.find",
		trace = pipwerks.UTILS.trace,
		scorm = pipwerks.SCORM;

    while ((!win.API && !win.API_1484_11) &&
           (win.parent) &&
           (win.parent != win) &&
           (findAttempts <= findAttemptLimit)) {

        findAttempts++;
        win = win.parent;

    }

    if (scorm.version) {											//If SCORM version is specified by user, look for specific API

        switch (scorm.version) {

            case "2004":

                if (win.API_1484_11) {

                    API = win.API_1484_11;

                } else {

                    trace(traceMsgPrefix + ": SCORM version 2004 was specified by user, but API_1484_11 cannot be found.");

                }

                break;

            case "1.2":

                if (win.API) {

                    API = win.API;

                } else {

                    trace(traceMsgPrefix + ": SCORM version 1.2 was specified by user, but API cannot be found.");

                }

                break;

        }

    } else {													//If SCORM version not specified by user, look for APIs

        if (win.API_1484_11) {									//SCORM 2004-specific API.

            scorm.version = "2004";								//Set version
            API = win.API_1484_11;

        } else if (win.API) {										//SCORM 1.2-specific API

            scorm.version = "1.2";								//Set version
            API = win.API;

        }

    }

    if (API) {

        trace(traceMsgPrefix + ": API found. Version: " + scorm.version);
        trace("API: " + API);

    } else {

        trace(traceMsgPrefix + ": Error finding API. \nFind attempts: " + findAttempts + ". \nFind attempt limit: " + findAttemptLimit);

    }

    return API;

};


/* -------------------------------------------------------------------------
   pipwerks.SCORM.API.get()
   Looks for an object named API, first in the current window's frame
   hierarchy and then, if necessary, in the current window's opener window
   hierarchy (if there is an opener window).

   Parameters:  None. 
   Returns:     Object if API found, null if no API found
---------------------------------------------------------------------------- */

pipwerks.SCORM.API.get = function () {

    var API = null,
		win = window,
		find = pipwerks.SCORM.API.find,
		trace = pipwerks.UTILS.trace;

    if (win.parent && win.parent != win) {

        API = find(win.parent);

    }

    if (!API && win.top.opener) {

        API = find(win.top.opener);

    }

    if (API) {

        pipwerks.SCORM.API.isFound = true;

    } else {

        trace("API.get failed: Can't find the API!");

    }

    return API;

};


/* -------------------------------------------------------------------------
   pipwerks.SCORM.API.getHandle()
   Returns the handle to API object if it was previously set

   Parameters:  None.
   Returns:     Object (the pipwerks.SCORM.API.handle variable).
---------------------------------------------------------------------------- */

pipwerks.SCORM.API.getHandle = function () {

    var API = pipwerks.SCORM.API;

    if (!API.handle && !API.isFound) {

        API.handle = API.get();

    }

    return API.handle;

};



// ------------------------------------------------------------------------- //
// --- pipwerks.SCORM.connection functions --------------------------------- //
// ------------------------------------------------------------------------- //


/* -------------------------------------------------------------------------
   pipwerks.SCORM.connection.initialize()
   Tells the LMS to initiate the communication session.

   Parameters:  None
   Returns:     Boolean
---------------------------------------------------------------------------- */

pipwerks.SCORM.connection.initialize = function () {

    var success = false,
		scorm = pipwerks.SCORM,
		completionStatus = pipwerks.SCORM.data.completionStatus,
		trace = pipwerks.UTILS.trace,
		makeBoolean = pipwerks.UTILS.StringToBoolean,
		debug = pipwerks.SCORM.debug,
		traceMsgPrefix = "SCORM.connection.initialize ";

    trace("connection.initialize called.");

    if (!scorm.connection.isActive) {

        var API = scorm.API.getHandle(),
            errorCode = 0;

        if (API) {

            switch (scorm.version) {
                case "1.2": success = makeBoolean(API.LMSInitialize("")); break;
                case "2004": success = makeBoolean(API.Initialize("")); break;
            }

            if (success) {

                //Double-check that connection is active and working before returning 'true' boolean
                errorCode = debug.getCode();

                if (errorCode !== null && errorCode === 0) {

                    scorm.connection.isActive = true;

                    if (scorm.handleCompletionStatus) {

                        //Automatically set new launches to incomplete 
                        completionStatus = pipwerks.SCORM.status("get");

                        if (completionStatus) {

                            switch (completionStatus) {

                                //Both SCORM 1.2 and 2004
                                case "not attempted": pipwerks.SCORM.status("set", "incomplete"); break;

                                    //SCORM 2004 only
                                case "unknown": pipwerks.SCORM.status("set", "incomplete"); break;

                                    //Additional options, presented here in case you'd like to use them
                                    //case "completed"  : break;
                                    //case "incomplete" : break;
                                    //case "passed"     : break;	//SCORM 1.2 only
                                    //case "failed"     : break;	//SCORM 1.2 only
                                    //case "browsed"    : break;	//SCORM 1.2 only

                            }

                        }

                    }

                } else {

                    success = false;
                    trace(traceMsgPrefix + "failed. \nError code: " + errorCode + " \nError info: " + debug.getInfo(errorCode));

                }

            } else {

                errorCode = debug.getCode();

                if (errorCode !== null && errorCode !== 0) {

                    trace(traceMsgPrefix + "failed. \nError code: " + errorCode + " \nError info: " + debug.getInfo(errorCode));

                } else {

                    trace(traceMsgPrefix + "failed: No response from server.");

                }
            }

        } else {

            trace(traceMsgPrefix + "failed: API is null.");

        }

    } else {

        trace(traceMsgPrefix + "aborted: Connection already active.");

    }

    return success;

};


/* -------------------------------------------------------------------------
   pipwerks.SCORM.connection.terminate()
   Tells the LMS to terminate the communication session

   Parameters:  None
   Returns:     Boolean
---------------------------------------------------------------------------- */

pipwerks.SCORM.connection.terminate = function () {

    var success = false,
		scorm = pipwerks.SCORM,
		exitStatus = pipwerks.SCORM.data.exitStatus,
		completionStatus = pipwerks.SCORM.data.completionStatus,
		trace = pipwerks.UTILS.trace,
		makeBoolean = pipwerks.UTILS.StringToBoolean,
		debug = pipwerks.SCORM.debug,
		traceMsgPrefix = "SCORM.connection.terminate ";


    if (scorm.connection.isActive) {

        var API = scorm.API.getHandle(),
            errorCode = 0;

        if (API) {

            if (scorm.handleExitMode && !exitStatus) {

                if (completionStatus !== "completed" && completionStatus !== "passed") {

                    switch (scorm.version) {
                        case "1.2": success = scorm.set("cmi.core.exit", "suspend"); break;
                        case "2004": success = scorm.set("cmi.exit", "suspend"); break;
                    }

                } else {

                    switch (scorm.version) {
                        case "1.2": success = scorm.set("cmi.core.exit", "logout"); break;
                        case "2004": success = scorm.set("cmi.exit", "normal"); break;
                    }

                }

            }

            switch (scorm.version) {
                case "1.2": success = makeBoolean(API.LMSFinish("")); break;
                case "2004": success = makeBoolean(API.Terminate("")); break;
            }

            if (success) {

                scorm.connection.isActive = false;

            } else {

                errorCode = debug.getCode();
                trace(traceMsgPrefix + "failed. \nError code: " + errorCode + " \nError info: " + debug.getInfo(errorCode));

            }

        } else {

            trace(traceMsgPrefix + "failed: API is null.");

        }

    } else {

        trace(traceMsgPrefix + "aborted: Connection already terminated.");

    }

    return success;

};



// ------------------------------------------------------------------------- //
// --- pipwerks.SCORM.data functions --------------------------------------- //
// ------------------------------------------------------------------------- //


/* -------------------------------------------------------------------------
   pipwerks.SCORM.data.get(parameter)
   Requests information from the LMS.

   Parameter: parameter (string, name of the SCORM data model element)
   Returns:   string (the value of the specified data model element)
---------------------------------------------------------------------------- */

pipwerks.SCORM.data.get = function (parameter) {

    var value = null,
		scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace,
		debug = pipwerks.SCORM.debug,
		traceMsgPrefix = "SCORM.data.get(" + parameter + ") ";

    if (scorm.connection.isActive) {

        var API = scorm.API.getHandle(),
            errorCode = 0;

        if (API) {

            switch (scorm.version) {
                case "1.2": value = API.LMSGetValue(parameter); break;
                case "2004": value = API.GetValue(parameter); break;
            }

            errorCode = debug.getCode();

            //GetValue returns an empty string on errors
            //Double-check errorCode to make sure empty string
            //is really an error and not field value
            if (value !== "" && errorCode === 0) {

                switch (parameter) {

                    case "cmi.core.lesson_status":
                    case "cmi.completion_status": scorm.data.completionStatus = value; break;

                    case "cmi.core.exit":
                    case "cmi.exit": scorm.data.exitStatus = value; break;

                }

            } else {

                trace(traceMsgPrefix + "failed. \nError code: " + errorCode + "\nError info: " + debug.getInfo(errorCode));

            }

        } else {

            trace(traceMsgPrefix + "failed: API is null.");

        }

    } else {

        trace(traceMsgPrefix + "failed: API connection is inactive.");

    }

    trace(traceMsgPrefix + " value: " + value);

    return String(value);

};


/* -------------------------------------------------------------------------
   pipwerks.SCORM.data.set()
   Tells the LMS to assign the value to the named data model element.
   Also stores the SCO's completion status in a variable named
   pipwerks.SCORM.data.completionStatus. This variable is checked whenever
   pipwerks.SCORM.connection.terminate() is invoked.

   Parameters: parameter (string). The data model element
               value (string). The value for the data model element
   Returns:    Boolean
---------------------------------------------------------------------------- */

pipwerks.SCORM.data.set = function (parameter, value) {

    var success = false,
		scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace,
		makeBoolean = pipwerks.UTILS.StringToBoolean,
		debug = pipwerks.SCORM.debug,
		traceMsgPrefix = "SCORM.data.set(" + parameter + ") ";


    if (scorm.connection.isActive) {

        var API = scorm.API.getHandle(),
            errorCode = 0;

        if (API) {

            switch (scorm.version) {
                case "1.2": success = makeBoolean(API.LMSSetValue(parameter, value)); break;
                case "2004": success = makeBoolean(API.SetValue(parameter, value)); break;
            }

            if (success) {

                if (parameter === "cmi.core.lesson_status" || parameter === "cmi.completion_status") {

                    scorm.data.completionStatus = value;

                }

            } else {

                trace(traceMsgPrefix + "failed. \nError code: " + errorCode + ". \nError info: " + debug.getInfo(errorCode));

            }

        } else {

            trace(traceMsgPrefix + "failed: API is null.");

        }

    } else {

        trace(traceMsgPrefix + "failed: API connection is inactive.");

    }

    return success;

};


/* -------------------------------------------------------------------------
   pipwerks.SCORM.data.save()
   Instructs the LMS to persist all data to this point in the session

   Parameters: None
   Returns:    Boolean
---------------------------------------------------------------------------- */

pipwerks.SCORM.data.save = function () {

    var success = false,
		scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace,
		makeBoolean = pipwerks.UTILS.StringToBoolean,
		traceMsgPrefix = "SCORM.data.save failed";


    if (scorm.connection.isActive) {

        var API = scorm.API.getHandle();

        if (API) {

            switch (scorm.version) {
                case "1.2": success = makeBoolean(API.LMSCommit("")); break;
                case "2004": success = makeBoolean(API.Commit("")); break;
            }

        } else {

            trace(traceMsgPrefix + ": API is null.");

        }

    } else {

        trace(traceMsgPrefix + ": API connection is inactive.");

    }

    return success;

};


pipwerks.SCORM.status = function (action, status) {

    var success = false,
		scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace,
		traceMsgPrefix = "SCORM.getStatus failed",
		cmi = "";

    if (action !== null) {

        switch (scorm.version) {
            case "1.2": cmi = "cmi.core.lesson_status"; break;
            case "2004": cmi = "cmi.completion_status"; break;
        }

        switch (action) {

            case "get": success = pipwerks.SCORM.data.get(cmi); break;

            case "set": if (status !== null) {

                success = pipwerks.SCORM.data.set(cmi, status);

            } else {

                success = false;
                trace(traceMsgPrefix + ": status was not specified.");

            }

                break;

            default: success = false;
                trace(traceMsgPrefix + ": no valid action was specified.");

        }

    } else {

        trace(traceMsgPrefix + ": action was not specified.");

    }

    return success;

};


// ------------------------------------------------------------------------- //
// --- pipwerks.SCORM.debug functions -------------------------------------- //
// ------------------------------------------------------------------------- //


/* -------------------------------------------------------------------------
   pipwerks.SCORM.debug.getCode
   Requests the error code for the current error state from the LMS

   Parameters: None
   Returns:    Integer (the last error code).
---------------------------------------------------------------------------- */

pipwerks.SCORM.debug.getCode = function () {

    var API = pipwerks.SCORM.API.getHandle(),
		scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace,
        code = 0;

    if (API) {

        switch (scorm.version) {
            case "1.2": code = parseInt(API.LMSGetLastError(), 10); break;
            case "2004": code = parseInt(API.GetLastError(), 10); break;
        }

    } else {

        trace("SCORM.debug.getCode failed: API is null.");

    }

    return code;

};


/* -------------------------------------------------------------------------
   pipwerks.SCORM.debug.getInfo()
   "Used by a SCO to request the textual description for the error code
   specified by the value of [errorCode]."

   Parameters: errorCode (integer).  
   Returns:    String.
----------------------------------------------------------------------------- */

pipwerks.SCORM.debug.getInfo = function (errorCode) {

    var API = pipwerks.SCORM.API.getHandle(),
		scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace,
        result = "";


    if (API) {

        switch (scorm.version) {
            case "1.2": result = API.LMSGetErrorString(errorCode.toString()); break;
            case "2004": result = API.GetErrorString(errorCode.toString()); break;
        }

    } else {

        trace("SCORM.debug.getInfo failed: API is null.");

    }

    return String(result);

};


/* -------------------------------------------------------------------------
   pipwerks.SCORM.debug.getDiagnosticInfo
   "Exists for LMS specific use. It allows the LMS to define additional
   diagnostic information through the API Instance."

   Parameters: errorCode (integer).  
   Returns:    String (Additional diagnostic information about the given error code).
---------------------------------------------------------------------------- */

pipwerks.SCORM.debug.getDiagnosticInfo = function (errorCode) {

    var API = pipwerks.SCORM.API.getHandle(),
		scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace,
        result = "";

    if (API) {

        switch (scorm.version) {
            case "1.2": result = API.LMSGetDiagnostic(errorCode); break;
            case "2004": result = API.GetDiagnostic(errorCode); break;
        }

    } else {

        trace("SCORM.debug.getDiagnosticInfo failed: API is null.");

    }

    return String(result);

};


// ------------------------------------------------------------------------- //
// --- Shortcuts! ---------------------------------------------------------- //
// ------------------------------------------------------------------------- //

// Because nobody likes typing verbose code.

pipwerks.SCORM.init = pipwerks.SCORM.connection.initialize;
pipwerks.SCORM.get = pipwerks.SCORM.data.get;
pipwerks.SCORM.set = pipwerks.SCORM.data.set;
pipwerks.SCORM.save = pipwerks.SCORM.data.save;
pipwerks.SCORM.quit = pipwerks.SCORM.connection.terminate;



// ------------------------------------------------------------------------- //
// --- pipwerks.UTILS functions -------------------------------------------- //
// ------------------------------------------------------------------------- //


/* -------------------------------------------------------------------------
   pipwerks.UTILS.StringToBoolean()
   Converts 'boolean strings' into actual valid booleans.
   
   (Most values returned from the API are the strings "true" and "false".)

   Parameters: String
   Returns:    Boolean
---------------------------------------------------------------------------- */

pipwerks.UTILS.StringToBoolean = function (string) {
    switch (string.toLowerCase()) {
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
    }
};



/* -------------------------------------------------------------------------
   pipwerks.UTILS.trace()
   Displays error messages when in debug mode.

   Parameters: msg (string)  
   Return:     None
---------------------------------------------------------------------------- */

pipwerks.UTILS.trace = function (msg) {

    if (pipwerks.debug.isActive) {
        //Firefox users can use the 'Firebug' extension's console.
        if (typeof window.console != "undefined") {
            console.error(msg);
        } else {
            //alert(msg);
        }

    }
};



ScormManager = function () {
    var tables = {};

    this.initialize = function () {
        this.addTable("question", Sbt.plugins.QuestionJSON); // <<<<< example
    }

    this.addTable = function (name, data) {
        tables[name] = data;
    }

    this.getTable = function (name) {
        return tables[name];
    }
}

ScormManager.instance = null;

ScormManager.getInstance = function () {
    if (ScormManager.instance == null)
        ScormManager.instance = new ScormManager();

    return ScormManager.instance;
}
/*


var sco = pipwerks.SCORM;


var success = sco.init();
if (success) {
    var status = sco.get("cmi.core.lesson_status");
    if (status != "completed") {
        success = sco.set("cmi.core.lesson_status", "completed");
        if (success) {
            sco.quit();
        }
    }
}

*/
function Primitive(elementId, primitiveType) {
    var elementSelector;
    var element;
    var canvasElement;

    this.fillColor = "#ff0000";
    this.strokeColor = "#000";
    this.strokeThickness = 2;
    this.cornerRadius = 5;

    Object.defineProperties(this, {
        selectedRowIndex: {
            get: function () {
                return _selectedRowIndex; // default
            },
            set: function (value) {
                _selectedRowIndex = value;
                this.selectRowIndex(value);
            },
            enumerable: true,
            configurable: true
        },
        selectedColumnIndex: {
            get: function () {
                return _selectedColumnIndex; // default
            },
            set: function (value) {
                _selectedColumnIndex = value;
                this.selectColumnIndex(value);
            },
            enumerable: true,
            configurable: true
        },
        selectedCellLocation: {
            get: function () {
                return {
                    x: _selectedColumnIndex,
                    y: _selectedRowIndex
                }
            },
            set: function (value) {
                _selectedColumnIndex = value.x;
                _selectedRowIndex = value.y;
                this.selectCellLocation(value);
            },
            enumerable: true,
            configurable: true
        },
        selectable: {
            get: function () {
                return _selectable; // default
            },
            set: function (value) {
                _selectable = value;
            },
            enumerable: true,
            configurable: true
        },
        selectionMode: {
            get: function () {
                return selectionMode; // default
            },
            set: function (value) {
                _selectionMode = value;
            },
            enumerable: true,
            configurable: true
        },
        selectionColor: {
            get: function () {
                return _selectionColor; // default
            },
            set: function (value) {
                _selectionColor = value;
            },
            enumerable: true,
            configurable: true
        }
    });

    this.initialize = function () {
        elementSelector = $("#" + elementId);
        element = elementSelector[0];
        canvasElement = elementSelector.find("#" + elementId + "_canvas")[0];
    };

    this.refresh = function () {
        var width = elementSelector.width();
        var height = elementSelector.height();

        if (primitiveType == PrimitiveType.ELLIPSE) {
            this.drawRegularEllipse(width, height);
        }
        else if (primitiveType == PrimitiveType.RECTANGLE) {
            this.drawRegularPolygon(width, height);
        }
        else if (primitiveType == PrimitiveType.ROUNDED_RECTANGLE) {
            this.drawRoundedPolygon(width, height, this.cornerRadius);
        }
        else if (primitiveType == PrimitiveType.TRIANGLE) {
            this.drawRegularTriangle(width, height);
        }
    };

    this.drawRegularEllipse = function (width, height) {
        var context = canvasElement.getContext("2d");

        context.clearRect(0,0,width,height);

        var centerX = 0;
        var centerY = 0;
        var radius = (width / 2) - (this.strokeThickness);

        if (width > height)
            radius = (height / 2) - (this.strokeThickness);

        context.strokeStyle = this.strokeColor;
        context.lineWidth = (this.strokeThickness * 2);
        context.lineJoin = "miter";
        context.miterLimit = 10;
        context.fillStyle = this.fillColor;
        // save state
        context.save();
        // translate context
        context.translate(width / 2, height / 2);
        // scale context horizontally
        context.scale(((width / 2) - (this.strokeThickness)) / radius, ((height / 2) - (this.strokeThickness)) / radius);
        // draw circle which will be stretched into an oval
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        // restore to original state
        context.restore();

        context.stroke();
        context.fill();
    };

    this.drawRegularPolygon = function (width, height) {
        var context = canvasElement.getContext("2d");

        context.clearRect(0,0,width,height);

        context.strokeStyle = this.strokeColor;
        context.lineWidth = (this.strokeThickness * 2);
        context.lineJoin = "miter";
        context.miterLimit = 10;
        context.fillStyle = this.fillColor;

        context.rect(this.strokeThickness, this.strokeThickness, width - (this.strokeThickness * 2), height - (this.strokeThickness * 2));

        context.stroke();
        context.fill();
    };

    this.drawRoundedPolygon = function (width, height, cornerRadius) {
        var context = canvasElement.getContext("2d");

        context.clearRect(0,0,width,height);

        var locationX = this.strokeThickness;
        var locationY = this.strokeThickness;
        var width = width - (this.strokeThickness * 2);
        var height = height - (this.strokeThickness * 2);

        context.strokeStyle = this.strokeColor;
        context.lineWidth = (this.strokeThickness * 2);
        context.lineJoin = "miter";
        context.miterLimit = 10;
        context.fillStyle = this.fillColor;

        context.beginPath();
        context.moveTo(locationX + cornerRadius, locationY);
        context.lineTo(locationX + width - cornerRadius, locationY);
        context.quadraticCurveTo(locationX + width, locationY, locationX + width, locationY + cornerRadius);
        context.lineTo(locationX + width, locationY + height - cornerRadius);
        context.quadraticCurveTo(locationX + width, locationY + height, locationX + width - cornerRadius, locationY + height);
        context.lineTo(locationX + cornerRadius, locationY + height);
        context.quadraticCurveTo(locationX, locationY + height, locationX, locationY + height - cornerRadius);
        context.lineTo(locationX, locationY + cornerRadius);
        context.quadraticCurveTo(locationX, locationY, locationX + cornerRadius, locationY);
        context.closePath();

        context.stroke();
        context.fill();
    };

    this.drawRegularTriangle = function (width, height) {
        var context = canvasElement.getContext("2d");

        context.clearRect(0,0,width,height);

        context.lineWidth = (this.strokeThickness * 2);
        context.lineJoin = "miter";
        context.miterLimit = 10;
        context.fillStyle = this.strokeColor;

        context.beginPath();
        context.moveTo(width / 2, 0);
        context.lineTo(width, height);
        context.lineTo(0, height);
        context.closePath();
        context.fill();

        context.strokeStyle = this.strokeColor;
        context.lineWidth = (this.strokeThickness * 2);
        context.lineJoin = "miter";
        context.miterLimit = 10;
        context.fillStyle = this.fillColor;


        var leftRightMargin = ((this.strokeThickness) / Math.tan(Math.atan(2 * height / width) / 2))
        var topPoint = height - this.strokeThickness - (2 * height / width * (width / 2 - leftRightMargin));

        context.beginPath();
        context.moveTo(width / 2, topPoint);
        context.lineTo(width - leftRightMargin, height - (this.strokeThickness));
        context.lineTo(leftRightMargin, height - (this.strokeThickness));
        context.closePath();

        context.fill();
    };

    this.DegreesToXY = function (degrees, radius, origin) {
        var xy = new Vector2(0, 0);
        var radians = degrees * Math.PI / 180;

        xy.x = (Math.cos(radians) * radius + origin.x);
        xy.y = (Math.sin(-radians) * radius + origin.y);

        return xy;
    };
}























var PrimitiveType = {
    ELLIPSE: "ellipse",
    RECTANGLE: "rectangle",
    ROUNDED_RECTANGLE: "roundedRectangle",
    TRIANGLE: "triangle"
};
function ParallaxScroll(designObject) {
    var this_ = this;

    var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
    var designObjectElementSelector = $("#" + designObjectElementId);

    this.currentTime = Date.now();

    this.isPlaying = false;
    this.canvasContext;

    this.scrollDirection = designObject.scrollDirection;
    this.scrollSpeed = designObject.scrollSpeed;

    this.initialize = function () {
        for (var i = designObject.scrollImages.length - 1; i >= 0; i--) {
            var scrollImage = designObject.scrollImages[i];

            var image = new Image;
            image.src = framework.localPath + scrollImage.imageUrl;
            scrollImage.image = image;

            if (this.scrollDirection == "left")
                scrollImage.scrollIndex = 0;
            else if (this.scrollDirection == "right")
                scrollImage.scrollIndex = -scrollImage.width;
            else if (this.scrollDirection == "top")
                scrollImage.scrollIndex = 0;
            else if (this.scrollDirection == "down")
                scrollImage.scrollIndex = -scrollImage.height;
        }

        var canvas = designObjectElementSelector[0];
        this.canvasContext = canvas.getContext("2d");

        this.refresh();

    }

    this.reset = function () {
        this_.scrollIndex = 0;
        this.refresh();
    }

    this.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.currentTime = Date.now();
            animate();
        }
    }

    this.stop = function () {
        if (this.isPlaying) {
            this.isPlaying = false;
        }
    }

    this.refresh = function () {
        this_.canvasContext.clearRect(0, 0, designObject.width, designObject.height);

        for (var i = designObject.scrollImages.length - 1; i >= 0; i--) {
            var scrollImage = designObject.scrollImages[i];

            if (this_.scrollDirection == "left" || this_.scrollDirection == "right") {
                this_.canvasContext.drawImage(scrollImage.image, scrollImage.scrollIndex, 0);
                this_.canvasContext.drawImage(scrollImage.image, scrollImage.scrollIndex + scrollImage.width, 0);
            } else {
                this_.canvasContext.drawImage(scrollImage.image, 0, scrollImage.scrollIndex);
                this_.canvasContext.drawImage(scrollImage.image, 0, scrollImage.scrollIndex + scrollImage.height);
            }

        }
    }

    var animate = function () {
        if (this_.isPlaying) {
            var currentTime_ = Date.now();

            var deltaTime = currentTime_ - this_.currentTime;
            this_.currentTime = currentTime_;

            for (var i = 0; i < designObject.scrollImages.length; i++) {
                var scrollImage = designObject.scrollImages[i];

                if (this_.scrollDirection == "left") {
                    scrollImage.scrollIndex -= scrollImage.scrollConstant * this_.scrollSpeed * (deltaTime / 1000);

                    if (scrollImage.scrollIndex < -scrollImage.width)
                        scrollImage.scrollIndex = 0;
                }
                else if (this_.scrollDirection == "right") {
                    scrollImage.scrollIndex += scrollImage.scrollConstant * this_.scrollSpeed * (deltaTime / 1000);

                    if (scrollImage.scrollIndex > 0)
                        scrollImage.scrollIndex = -scrollImage.width;
                }
                else if (this_.scrollDirection == "down") {
                    scrollImage.scrollIndex -= scrollImage.scrollConstant * this_.scrollSpeed * (deltaTime / 1000);

                    if (scrollImage.scrollIndex < -scrollImage.height)
                        scrollImage.scrollIndex = 0;
                }
                else if (this_.scrollDirection == "top") {
                    scrollImage.scrollIndex += scrollImage.scrollConstant * this_.scrollSpeed * (deltaTime / 1000);

                    if (scrollImage.scrollIndex > 0)
                        scrollImage.scrollIndex = -scrollImage.height;
                }
            }

            this_.refresh();

            requestAnimationFrame(animate);
        }
    }
}
function Polygon(elementId) {
    var elementSelector;
    var element;

    this.edgeCount = 3;
    this.fillColor = "#ff0000";
    this.strokeColor = "#000";
    this.strokeThickness = 2;
    this.startAngle = 0;

    this.initialize = function() {
        elementSelector = $("#" + elementId);
        element = elementSelector[0];
    }

    this.refresh = function () {

        var width = elementSelector.width();
        var height = elementSelector.height();
        
        var calculateMaxRadius = (width / 2) - (this.strokeThickness * 2);

        if (width > height)
            calculateMaxRadius = (height / 2) - (this.strokeThickness * 2);

        if (calculateMaxRadius >= this.strokeThickness / 2)
        {
            this.drawRegularPolygon(this.edgeCount, calculateMaxRadius, this.startAngle + 90, new Vector2(width / 2, height / 2));
        }
        //else
        //{
        //    console.error("Polygon can not be drawn!")
        //}
    };

    this.drawRegularPolygon = function(sides, radius, startingAngle, center){
        var points =  this.calculateVertices(sides, radius, startingAngle, center);
        var context = element.getContext("2d");

        context.strokeStyle = this.strokeColor;
        context.lineWidth = (this.strokeThickness * 2);
        context.lineJoin = "miter";
        context.miterLimit = 10;
        context.fillStyle = this.fillColor;

        context.beginPath();
        context.moveTo(points[0].x, points[0].y);

        for (var i = 1; i < points.length; i++)
            context.lineTo(points[i].x, points[i].y);

        context.lineTo(points[0].x, points[0].y);
        context.closePath();

        var width = elementSelector.width();
        var height = elementSelector.height();

        context.clearRect(0, 0, width, height);

        context.stroke();
        context.fill();
    };


    this.calculateVertices = function(sides, radius, startingAngle, center)
    {
        if (sides < 3)
            console.error("Polygon must have 3 sides or more.");

        var points = [];
        var step = 360 / sides;

        var angle = startingAngle; //starting angle
        for (var i = startingAngle; i < startingAngle + 360; i += step) //go in a full circle
        {
            points.push(this.DegreesToXY(angle, radius, center)); //code snippet from above
            angle += step;
        }

        return points;
    };


    this.DegreesToXY = function(degrees, radius, origin)
    {
        var xy = new Vector2(0,0);
        var radians = degrees * Math.PI / 180;

        xy.x = (Math.cos(radians) * radius + origin.x);
        xy.y = (Math.sin(-radians) * radius + origin.y);

        return xy;
    };
}























function ExecutionParameters() {
    this.flow = false;

    var scopeVariablesStack

    this.scopeVariables = null;
    this.eventVariables = null;
    this.returnVariables = null;

    this.pushScopeVariables = function () {
        
    }

    this.createScopeVariable = function (name, value) {
        var scopeVariable = {};
        scopeVariable.name = name;
        scopeVariable.value = value;
        return scopeVariable;
    }

    this.addScopeVariable = function (variable) {
        this.scopeVariables.push(variable);
    }

    this.removeScopeVariable = function (variable) {
        var index = this.scopeVariables.indexOf(variable);
        if (index != -1)
            this.scopeVariables.splice(index, 1);
    }

    this.getScopeVariable = function (name) {
        if (this.scopeVariables != null) {
            for (var i = 0; i < this.scopeVariables.length; i++) {
                var scopeVariable = this.scopeVariables[i];
                if (scopeVariable.name == name)
                    return scopeVariable;
            }
        }

        return null;
    }

    this.createEventVariable = function (name, value) {
        var eventVariable = {};
        eventVariable.name = name;
        eventVariable.value = value;
        return eventVariable;
    }

    this.addEventVariable = function (variable) {
        this.eventVariables.push(variable);
    }

    this.removeEventVariable = function (variable) {
        var index = this.eventVariables.indexOf(variable);
        if (index != -1)
            this.eventVariables.splice(index, 1);
    }

    this.getEventVariable = function (name) {
        if (this.eventVariables != null) {
            for (var i = 0; i < this.eventVariables.length; i++) {
                var eventVariable = this.eventVariables[i];
                if (eventVariable.name == name)
                    return eventVariable;
            }
        }

        return null;
    }

    this.createReturnVariable = function (name, value) {
        var returnVariable = {};
        returnVariable.name = name;
        returnVariable.value = value;
        return returnVariable;
    }

    this.addReturnVariable = function (variable) {
        this.returnVariables.push(variable);
    }

    this.removeReturnVariable = function (variable) {
        var index = this.returnVariables.indexOf(variable);
        if (index != -1)
            this.returnVariables.splice(index, 1);
    }

    this.getReturnVariable = function (name) {
        if (this.returnVariables != null) {
            for (var i = 0; i < this.returnVariables.length; i++) {
                var returnVariable = this.returnVariables[i];
                if (returnVariable.name == name)
                    return returnVariable;
            }
        }

        return null;
    }

    this.clone = function () {
        var executionParameters = new ExecutionParameters();

        executionParameters.flow = this.flow;
        
        // event variables
        if (this.eventVariables != null) {
            executionParameters.eventVariables = new Array();
            for (var i = 0; i < this.eventVariables.length; i++) {
                var eventVariable = this.eventVariables[i];
                var eventVariable_ = { name: eventVariable.name, value: eventVariable.value };
                executionParameters.eventVariables.push(eventVariable_);
            }
        }

        // scope variables
        if (this.scopeVariables != null) {
            executionParameters.scopeVariables = new Array();
            for (var i = 0; i < this.scopeVariables.length; i++) {
                var scopeVariable = this.scopeVariables[i];
                var scopeVariable_ = { name: scopeVariable.name, value: scopeVariable.value };
                executionParameters.scopeVariables.push(scopeVariable_);
            }
        }

        // return variables
        if (this.returnVariables != null) {
            executionParameters.returnVariables = new Array();
            for (var i = 0; i < this.returnVariables.length; i++) {
                var returnVariable = this.returnVariables[i];
                var returnVariable_ = { name: returnVariable.name, value: returnVariable.value };
                executionParameters.returnVariables.push(returnVariable_);
            }
        }

        return executionParameters;
    }
}
function ImageButton(element, id, statesImageUrl, statesImageWidth, statesImageHeight, stateWidth, stateHeight, enabled, selected) {
    var this_ = this;

    // save parameters to public members
    this.element = element;
    this.id = id;
    this.statesImageUrl = statesImageUrl;
    this.statesImageWidth = statesImageWidth;
    this.statesImageHeight = statesImageHeight;
    this.stateWidth = stateWidth;
    this.stateHeight = stateHeight;
    this.selected = selected;

    var _enabled = enabled;

    // public members
    //this.textAlign = "middle_center";
    this.stateBehavior = "four_state";
    this.interactionBehavior = "normal";

    // text style functions
    this.removeTextStyle = function () {
        $("#" + id + "_style").remove();
    }

    this.createTextStyle = function (text, width, height, horizontalAlign, verticalAlign, margin) {
        var style = $("<style id='" + id + "_style' type='text/css'></style>");
        style.html("#" + id + ":after { content: '" + text + "'; width:" + (width - (margin * 2)) + "px; height:" + (height - (margin * 2)) + "px; position: absolute; display: flex; justify-content: " + horizontalAlign + "; align-items: " + verticalAlign + "; padding: " + margin + "px }");
        $(document.head).append(style);
    };

    // properties
    var _text = "";
    var _textAlign = "middle_center";
    var _textMargin = 0;

    Object.defineProperties(this, {
        enabled: {
            get: function () {
                return _enabled; // default
            },
            set: function (value) {
                console.info(value);
                _enabled = value;
                this.refresh();
            },
            enumerable: true,
            configurable: true
        },
        horizontalAlign: {
            get: function () {
                if (this.textAlign == "top_left" ||
                    this.textAlign == "middle_left" ||
                    this.textAlign == "bottom_left")
                    return "flex-start";
                else if (this.textAlign == "top_center" ||
                    this.textAlign == "middle_center" ||
                    this.textAlign == "bottom_center")
                    return "center";
                else if (this.textAlign == "top_right" ||
                    this.textAlign == "middle_right" ||
                    this.textAlign == "bottom_right")
                    return "flex-end";
                else
                    return "center"; // default
            },
            enumerable: true,
            configurable: true
        },
        verticalAlign: {
            get: function () {
                if (this.textAlign == "top_left" ||
                    this.textAlign == "top_center" ||
                    this.textAlign == "top_right")
                    return "flex-start";
                else if (this.textAlign == "middle_left" ||
                    this.textAlign == "middle_center" ||
                    this.textAlign == "middle_right")
                    return "center";
                else if (this.textAlign == "bottom_left" ||
                    this.textAlign == "bottom_center" ||
                    this.textAlign == "bottom_right")
                    return "flex-end";
                else
                    return "center"; // default
            },
            enumerable: true,
            configurable: true
        },
        text: {
            get: function () {
                return _text;
            },
            set: function (value) {
                _text = value;
                if (_text != "")
                    this.createTextStyle(this.text,
                        this.stateWidth,
                        this.stateHeight,
                        this.horizontalAlign,
                        this.verticalAlign,
                        this.textMargin
                    )
            },
            enumerable: true,
            configurable: true
        },
        textAlign: {
            get: function () {
                return _textAlign;
            },
            set: function (value) {
                _textAlign = value;
                if (_textAlign != "")
                    this.createTextStyle(this.text,
                        this.stateWidth,
                        this.stateHeight,
                        this.horizontalAlign,
                        this.verticalAlign,
                        this.textMargin
                    )
            },
            enumerable: true,
            configurable: true
        },
        textMargin: {
            get: function () {
                return _textMargin;
            },
            set: function (value) {
                _textMargin = value;
                if (_textMargin != "")
                    this.createTextStyle(this.text,
                        this.stateWidth,
                        this.stateHeight,
                        this.horizontalAlign,
                        this.verticalAlign,
                        this.textMargin
                    )
            },
            enumerable: true,
            configurable: true
        }
    });

    // interaction state variables
    var isOver = false;
    var isDown = false;

    var $element = $(element);

    // css settings
    $element.css("width", stateWidth);
    $element.css("height", stateHeight);

    $element.css("over-flow", "hidden");

    $element.css({
        "background-image": "url('" + framework.localPath + this_.statesImageUrl + "')",
        "background-repeat": "no-repeat",
        "background-color": "transparent",
        "overflow": "hidden"
    });

    // event handlers
    this.onMouseDown = function (e) {
        if (this_.enabled) {
            isDown = true;
            this_.refresh();
        }

        e.preventDefault();
        return false;
    }

    this.onMouseOver = function (e) {
        if (this_.enabled) {
            isOver = true;
            this_.refresh();
        }

        e.preventDefault();
        return false;
    }

    this.onMouseOut = function (e) {
        if (this_.enabled) {
            isOver = false;
            this_.refresh();
        }

        e.preventDefault();
        return false;
    };

    this.onMouseUp = function (e) {
        if (this_.enabled) {
            isDown = false;

            if (this_.interactionBehavior == "toggle") {
                this_.selected = !this_.selected;
            }
            else if (this_.interactionBehavior == "push") {
                this_.selected = true;
            }

            this_.refresh();
        }

        e.preventDefault();
        return false;
    };

    this.reset = function () {
        isDown = false;
        this.refresh();
    };

    $element.on(Sbt.Actions.down, this.onMouseDown);
    $element.on("mouseover", this.onMouseOver);
    $element.on("mouseout", this.onMouseOut);
    $element.on(Sbt.Actions.up, this.onMouseUp);
    $element.on(Sbt.Actions.cancel, this.onMouseUp);

    // refresh
    this.refresh = function () {
        // update state appearance
        this_.switchToUpState();
        // normal state
        if (this_.interactionBehavior == "normal") {
            if (this_.enabled) {
                if (!isOver) {
                    if (!isDown)
                        this_.switchToUpState();
                } else {
                    if (!isDown)
                        this_.switchToOverState();
                    else
                        this_.switchToDownState();
                }
            } else {
                this_.switchToDisabledState();
            }
        } else if (this_.interactionBehavior == "toggle" || this_.interactionBehavior == "push") {
            if (this_.enabled) {
                if (this_.stateBehavior == "four_state") {
                    if (!isOver) {
                        if (!this_.selected)
                            this_.switchToUpState();
                        else
                            this_.switchToDownState();
                    } else {
                        if (!isDown && !this_.selected)
                            this_.switchToOverState();
                        else
                            this_.switchToDownState();
                    }
                } else if (this_.stateBehavior == "six_state") {
                    if (!isOver) {
                        if (!this_.selected)
                            this_.switchToUpState();
                        else
                            this_.switchToDownState();
                    } else {
                        if (!isDown)
                            this_.switchToOverState();
                        else
                            this_.switchToDownState();
                    }
                }
            } else {
                this_.switchToDisabledState();
            }
        }
    };

    this.switchToUpState = function () {
        var backgroundXOffset = 0;
        $element.css({
            "background-position": "-" + backgroundXOffset.toString() + "px 0px"
        });
    };

    this.switchToOverState = function () {
        var fourState = 2;
        var sixState = 2;
        var sixStateSelected = 4;
        //
        if (this_.stateBehavior == "four_state") {
            this.findPosition(fourState);
        }
        else if (this_.stateBehavior == "six_state") {
            if (this_.selected) {
                this.findPosition(sixStateSelected);
            } else {
                this.findPosition(sixState);
            }
        }
    };

    this.switchToDownState = function () {
        var fourState = 3;
        var sixState = 3;
        //
        if (this_.stateBehavior == "four_state") {
            this.findPosition(fourState);
        }
        else if (this_.stateBehavior == "six_state") {
            this.findPosition(sixState);
        }
    };

    this.switchToDisabledState = function () {
        var fourState = 4;
        var sixState = 5;
        var sixStateSelected = 6;
        //
        if (this_.stateBehavior == "four_state") {
            this.findPosition(fourState);
        }
        else if (this_.stateBehavior == "six_state") {
            if (this_.selected) {
                this.findPosition(sixStateSelected);
            }
            else {
                this.findPosition(sixState);
            }
        }
    };


    this.findPosition = function (position) {
        //four state position 1 = up, position 2 = over, position 3 = down, position 4 = disabled
        //six state position 1 = up, position 2 = over, position 3 = down, position 4 = down over, position 5 = disabled, position 6 = disabled down
        var backgroundXOffset = 0;
        var backgroundYOffset = 0;

        var count = 0;
        var i = 0;
        var j = 0;
        var columnCount = this.statesImageWidth / this_.stateWidth;
        var rowCount = this.statesImageHeight / this_.stateHeight;
        var finishLoop = false;

        for (; i < rowCount; i++) {
            j = 0;
            for (; j < columnCount; j++) {
                count++;
                if (count == position) {
                    finishLoop = true;
                    backgroundXOffset += this_.stateWidth * j;
                    backgroundYOffset -= this_.stateHeight * i;
                    finishLoop = true;
                    break;
                }
            }
            if (finishLoop)
                break;
        }

        $element.css({
            "background-position": "-" + backgroundXOffset.toString() + "px " + backgroundYOffset + "px"
        });
    }
}


function Table(designObject) {
    var this_ = this;

    var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
    var $designObjectElement = $("#" + designObjectElementId);

    var _selectedRowIndex = -1;
    var _selectedColumnIndex = -1;
    var _selectable = designObject.selectable;
    var _selectionMode = designObject.selectionMode;
    var _selectionColor = "#FBD695";

    Object.defineProperties(this, {
        selectedRowIndex: {
            get: function () {
                return _selectedRowIndex; // default
            },
            set: function (value) {
                _selectedRowIndex = value;
                this.selectRowIndex(value);
            },
            enumerable: true,
            configurable: true
        },
        selectedColumnIndex: {
            get: function () {
                return _selectedColumnIndex; // default
            },
            set: function (value) {
                _selectedColumnIndex = value;
                this.selectColumnIndex(value);
            },
            enumerable: true,
            configurable: true
        },
        selectedCellLocation: {
            get: function () {
                return {
                    x: _selectedColumnIndex,
                    y: _selectedRowIndex
                }
            },
            set: function (value) {
                _selectedColumnIndex = value.x;
                _selectedRowIndex = value.y;
                this.selectCellLocation(value);
            },
            enumerable: true,
            configurable: true
        },
        selectable: {
            get: function () {
                return _selectable; // default
            },
            set: function (value) {
                _selectable = value;
            },
            enumerable: true,
            configurable: true
        },
        selectionMode: {
            get: function () {
                return selectionMode; // default
            },
            set: function (value) {
                _selectionMode = value;
            },
            enumerable: true,
            configurable: true
        },
        selectionColor: {
            get: function () {
                return _selectionColor; // default
            },
            set: function (value) {
                _selectionColor = value;
            },
            enumerable: true,
            configurable: true
        }
    });

    this.initialize = function () {

        // $('head').append('<link rel="stylesheet" href="./../../../../../../../style.css" type="text/css" />');
        this.createTableStyle();

        var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

        if (designObject.selectable)
            this.createSelectionStyle(this.selectionColor);

        $designObjectElement.css("overflow", "hidden");

        $designObjectElement.append("<table style='border-collapse: collapse; border-spacing: 0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;'></table>");
        var tableSelector = $designObjectElement.find("table");
        tableSelector.css("width", "100%");

        if (designObject.scrollMode != "vertical" && !designObject.autoHeight) {
            for (var i = 0; i < designObject.columns.length; i++) {
                var column = designObject.columns[i];

                if (column.widthMode == "fixed")
                    tableSelector.append("<col width='" + column.width + "'>");
                else
                    tableSelector.append("<col width='1*'>");
            }
        }

        if (designObject.autoHeight) {
            $designObjectElement.addClass("vfabrika-table-auto-height-" + designObjectElementId);
        }

        if (designObject.autoWidth) {
            $designObjectElement.addClass("vfabrika-table-auto-width-" + designObjectElementId);
        }

        if (designObject.scrollMode == "horizontal" && !designObject.autoWidth) {
            $designObjectElement.css("overflow-y", "hidden");
            $designObjectElement.css("overflow-x", "auto");
        }

        //$designObjectElement.css("border", "1px blue solid");

        if (designObject.tableStyle == "default")
            tableSelector.addClass("vfabrika-table-default-" + designObjectElementId);
        else if (designObject.tableStyle != "")
            tableSelector.addClass(designObject.tableStyle);


        // table header
        if (designObject.showHeader && designObject.columns.length > 0) {
            var rowHeaderText = "<thead id='" + designObjectElementId + "_header'>";

            if (designObject.scrollMode == "vertical" && !designObject.autoHeight) {
                rowHeaderText = "<thead id='" + designObjectElementId + "_header' style='display: block;'>";
                rowHeaderText += "<tr style='height:" + designObject.headerRowHeight + "px; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;'>";
            }
            else {
                rowHeaderText = "<thead id='" + designObjectElementId + "_header'>";
                rowHeaderText += "<tr style='height:" + designObject.headerRowHeight + "px;'>";
            }

            var tableColumnStyle = "";
            if (designObject.tableColumnStyle == "default") {
                tableColumnStyle = "vfabrika-table-default-column-" + designObjectElementId;
            }
            else if (designObject.tableColumnStyle != null || designObject.tableColumnStyle != "") {
                tableColumnStyle = designObject.tableColumnStyle;
            }

            for (var j = 0; j < designObject.columns.length; j++) {
                var column = designObject.columns[j];
                rowHeaderText += "<th  class='" + tableColumnStyle + "' name='" + column.name + "' style='text-align:" + column.headerTextAlign + ";";

                if (designObject.scrollMode == "vertical" && !designObject.autoHeight) {

                    var order = j + 1;


                    rowHeaderText += "box-sizing: border-box;" +
                        "-webkit-box-ordinal-group:" + order + ";" +
                        "-moz-box-ordinal-group:" + order + ";" +
                        "-ms-flex-order:" + order + ";" +
                        "-webkit-order:" + order + ";" +
                        "order:" + order + ";";

                    if (column.widthMode == "fixed") {
                        rowHeaderText += "width:" + column.width + "px;" +
                            "-moz-box-flex: 1;";
                    }
                    else {
                        rowHeaderText += "box-sizing: border-box;" + //border-collapse: collapse; border-spacing: 0;
                            "width:" + parseInt(100 / designObject.columns.length) + "%;" +
                            "-webkit-box-flex: 1;" +
                            "-moz-box-flex: 1;" +
                            "-webkit-flex: 1;" +
                            "-ms-flex: 1;" +
                            "flex: 1;";
                    }
                }

                rowHeaderText += "'>" + column.headerText + "</th>";
            }

            rowHeaderText += "</tr></thead>";
            tableSelector.append(rowHeaderText);

            var tableHeaderSelector = tableSelector.find("#" + designObjectElementId + "_header");

            if (designObject.tableHeaderRowStyle == "default")
                tableHeaderSelector.addClass("vfabrika-table-default-header-row-" + designObjectElementId);
            else if (designObject.tableHeaderRowStyle != "")
                tableHeaderSelector.addClass(designObject.tableHeaderRowStyle);


        }

        // table body
        var tableBodyText = "<tbody></tbody>";
        tableSelector.append(tableBodyText);

        var tableBodySelector = tableSelector.find("tbody");
        var bodyHeight = designObject.height;

        if (designObject.showHeader)
            bodyHeight -= designObject.headerRowHeight;

        if (designObject.showFooter)
            bodyHeight -= designObject.footerRowHeight;


        if (!designObject.autoHeight) {
            tableBodySelector.height(bodyHeight);
        }

        if (designObject.scrollMode == "vertical" && !designObject.autoHeight) {
            tableBodySelector.css("overflow-y", "auto");
            tableBodySelector.css("overflow-x", "hidden");
            tableBodySelector.css("display", "block");
        }

        if (designObject.scrollMode == "vertical" && !designObject.autoWidth) {
            tableBodySelector.width(designObject.width);
        }

        // table footer
        if (designObject.showFooter) {
            var rowHeaderText = "<tfoot id='" + designObjectElementId + "_footer'>" +
                "<tr style='height:" + designObject.footerRowHeight + "px' rowType='footer'>" +
                "<td colspan='" + designObject.columns.length.toString() + "'>" +
                "<div id='" + designObjectElementId + "_footerDiv'>" +
                "</div>" +
                "</td>" +
                "</tr>" +
                "</tfoot>";

            tableSelector.append(rowHeaderText);

            var tableFooterSelector = tableSelector.find("#" + designObjectElementId + "_footer");

            if (designObject.tableFooterRowStyle == "default")
                tableFooterSelector.addClass("vfabrika-table-default-footer-row-" + designObjectElementId);
            else if (designObject.tableFooterRowStyle != "")
                tableFooterSelector.addClass(designObject.tableFooterRowStyle);
            // table
        }
    };

    this.refresh = function () {
        //return false;
        setTimeout(function () {

            // Get the width here
            var tableSelector = $designObjectElement.find("table");
            var $tableHeader = $designObjectElement.find("thead").eq(0);
            var $tableBody = tableSelector.find("tbody").eq(0);
            var $tableFooter = $designObjectElement.find("tfoot").eq(0);

            var tableHeadRowWidth = $tableHeader.width();
            var tableBodyRow = $designObjectElement.find("tr").eq(1);
            var tableBodyRowWidth = tableBodyRow.width();

            $tableHeader.find("tr").eq(0).width(tableBodyRow.width());
        }, 0);
    };

    this.selectRowIndex = function (index) {
        var selectionIndex = index;

        // Selection Clear
        $(".vfabrika-table-selection-color-" + designObjectElementId).removeClass("gazelle-table-selection-color-" + designObjectElementId);
        _selectedColumnIndex = -1;
        // Selection Clear End
        this.createSelectionStyle(this.selectionColor);

        if (designObject.showHeader)
            selectionIndex++;

        if (designObject.showFooter)
            if ($designObjectElement.find("tr").length == (selectionIndex + 1))
                return false;

        $designObjectElement.find("tr").eq(selectionIndex).addClass("vfabrika-table-selection-color-" + designObjectElementId);
    };

    this.selectColumnIndex = function (index) {
        var selectionIndex = 0;

        // Selection Clear
        $(".vfabrika-table-selection-color-" + designObjectElementId).removeClass("gazelle-table-selection-color-" + designObjectElementId);
        _selectedRowIndex = -1;
        // Selection Clear End
        this.createSelectionStyle(this.selectionColor);

        var $tableBodyElement = $designObjectElement.find("tbody").eq(0);

        for (var i = selectionIndex; i < $tableBodyElement.find("tr").length; i++) {
            $tableBodyElement.find("tr").eq(i).find("td").eq(index).addClass("vfabrika-table-selection-color-" + designObjectElementId);
        }
    };

    this.selectCellLocation = function (location) {
        var selectionIndex = location.y;

        // Selection Clear
        $(".gazelle-table-selection-color-" + designObjectElementId).removeClass("vfabrika-table-selection-color-" + designObjectElementId);
        // Selection Clear End

        this.createSelectionStyle(this.selectionColor);

        var $tableBodyElement = $designObjectElement.find("tbody").eq(0);
        $tableBodyElement.find("tr").eq(selectionIndex).find("td").eq(location.x).addClass("vfabrika-table-selection-color-" + designObjectElementId);
    };

    this.clearSelection = function () {
        $(".gazelle-table-selection-color-" + designObjectElementId).removeClass("vfabrika-table-selection-color-" + designObjectElementId);
        _selectedRowIndex = -1;
        _selectedColumnIndex = -1;
    };

    this.createSelectionStyle = function (color) {
        $("#" + designObjectElementId + "Style").remove();

        var style = $("<style></style>");
        style.attr("id", designObjectElementId + "Style");
        style.attr("type", "text/css");
        style.html("#" + designObjectElementId + " .vfabrika-table-selection-color-" + designObjectElementId + " {background-color:" + color + "; }");

        $("head").append(style);

    };

    this.createTableStyle = function () {
        $("#vfabrikaDefaultTable" + designObjectElementId + "Style").remove();

        var style = $("<style></style>");
        style.attr("id", "vfabrikaDefaultTable" + designObjectElementId + "Style");
        style.attr("type", "text/css");

        var styleText = "#" + designObjectElementId + " .vfabrika-table-auto-width-" + designObjectElementId + " {width:auto !important;}";
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-auto-height-" + designObjectElementId + " {height:auto !important;}";
        
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-default-column-" + designObjectElementId + " {border-left-style: solid;  border-left-width: 1px; border-left-color: #c1c3d1; border-right-style: solid; border-right-width: 1px; border-right-color: #c1c3d1; border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #c1c3d1; padding-left: 4px; padding-right: 4px; overflow: hidden;}";
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-default-even-row-" + designObjectElementId + " {}";
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-default-footer-row-" + designObjectElementId + " {text-align: center;font-size: 14px; color: #ffffff; background-color: #ff7400;}";
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-default-header-row-" + designObjectElementId + " {border-bottom-style: solid; border-bottom-width: 2px; border-bottom-color: #9fa8b0; color: #ffffff; font-weight: normal !important; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; background: #ff7400; /* Old browsers */ background: -moz-linear-gradient(top,  #ffb477 10%, #ff7400 100%); /* FF3.6-15 */ background: -webkit-linear-gradient(top,  #ffb477 10%,#ff7400 100%); /* Chrome10-25,Safari5.1-6 */ background: linear-gradient(to bottom,  #ffb477 10%,#ff7400 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffb477', endColorstr='#ff7400',GradientType=0 ); /* IE6-9 */}";
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-default-odd-row-" + designObjectElementId + " {background-color: #ebebeb;}";
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-default-row-" + designObjectElementId + " {font-size: 14px; color: #676c86;}";
        styleText += "\n#" + designObjectElementId + " .vfabrika-table-default-" + designObjectElementId + " {border:solid 0 #000000; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; background-color: #f3f3f3;}";

        style.html(styleText);

        $("head").append(style);
    };
}
function Timer() {
    var intervalId = null;
    var self = this;

    this.interval = 1000;
    this.isActive = false;

    this.uniqueId = Math.random() * 1000;

    this.start = function () {
        if (!self.isActive) {
            $(self).triggerHandler("start");
            self.intervalId = setInterval(self.onTimerTick, self.interval);
            self.isActive = true;
        }
    }

    this.stop = function () {
        if (self.isActive) {
            self.isActive = false;
            clearInterval(self.intervalId);
            self.intervalId = null;
            $(self).triggerHandler("stop");
        }
    }

    self.onTimerTick = function () {
        $(self).triggerHandler("tick");
    }

    this.updateInterval = function (value) {
        self.interval = value;

        if (self.isActive) {
            if (self.intervalId != null)
                clearInterval(self.intervalId);

            self.intervalId = setInterval(self.onTimerTick, self.interval);
        }
    }
}
function Delay() {
    var self = this;
    var timeoutId = null;

    this.interval = 1000;
    this.isActive = false;

    this.start = function () {
        if (!self.isActive) {
            self.isActive = true;
            timeoutId = setTimeout(onTimeout, self.interval);
            $(self).triggerHandler("start");
        }
    }

    this.stop = function () {
        if (self.isActive) {
            if (timeoutId != null)
                clearTimeout(timeoutId);
            self.isActive = false;
            $(self).triggerHandler("stop");
        }
    }

    var onTimeout = function () {
        if (self.isActive) {
            self.isActive = false;
            $(self).triggerHandler("complete");
        }
    }

    this.updateInterval = function (value) {
        self.interval = value;

        if (self.isActive) {
            clearTimeout(timeoutId);
            setTimeout(onTimeout, self.interval);
        }
    }
}
