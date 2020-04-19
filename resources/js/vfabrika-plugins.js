function ScormBlocksController(manager, player, playerData) {
    this.name = "Scorm";

    var BlockType = {
        SCORM_GET_VALUE : "scormGetValue",
        SCORM_SET_VALUE : "scormSetValue",

        SCORM_GET_INTERACTION_COUNT : "scormGetInteractionCount",
        SCORM_GET_INTERACTION_ID : "scormGetInteractionId",
        SCORM_SET_INTERACTION_ID : "scormSetInteractionId",
        SCORM_GET_INTERACTION_TYPE : "scormGetInteractionType",
        SCORM_SET_INTERACTION_TYPE : "scormSetInteractionType",

        SCORM_GET_OBJECTIVE_COUNT : "scormGetObjectiveCount",
        SCORM_GET_OBJECTIVE_ID : "scormGetObjectiveId",
        SCORM_SET_OBJECTIVE_ID : "scormSetObjectiveId",
        SCORM_GET_OBJECTIVE_STATUS : "scormGetObjectiveStatus",
        SCORM_SET_OBJECTIVE_STATUS : "scormSetObjectiveStatus",
        SCORM_GET_OBJECTIVE_SCORE_RAW : "scormGetObjectiveScoreRaw",
        SCORM_SET_OBJECTIVE_SCORE_RAW : "scormSetObjectiveScoreRaw",

        SCORM_GET_LESSON_STATUS : "scormGetLessonStatus",
        SCORM_SET_LESSON_STATUS : "scormSetLessonStatus",

        SCORM_GET_USER_DATA : "scormGetUserData",
        SCORM_SET_USER_DATA : "scormSetUserData",

        SCORM_IS_INITIALIZED : "scormIsInitialized",
        SCORM_INITIALIZE : "scormInitialize",
        SCORM_SAVE : "scormSave",
        SCORM_DEINITIALIZE : "scormDeinitialize",
        SCORM_GET_LAST_ERROR : "scormGetLastError",

        SCORM_LESSON_STATUS_TYPES : "scormLessonStatusTypes",
        SCORM_OBJECTIVE_STATUS_TYPES : "scormObjectiveStatusTypes",
        SCORM_INTERACTION_TYPES : "scormInteractionTypes"

    };

    this.preInitialize = function () {

    };

    this.initialize = function () {

    };

    this.postInitialize = function () {

    };

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.SCORM_GET_VALUE) {
            var inputValue = block.getInput("default");
            var item = inputValue.getItem("value");
            return manager.returnValue(true, pipwerks.SCORM.get(item.value));
        }
        else if (block.type == BlockType.SCORM_SET_VALUE) {
            var inputValue = block.getInput("default");
            var item = inputValue.getItem("value");
            return manager.returnValue(true, pipwerks.SCORM.set(item.value));
        }

        else if (block.type == BlockType.SCORM_GET_INTERACTION_COUNT) {
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.interactions._count"));
        }
        else if (block.type == BlockType.SCORM_GET_INTERACTION_ID) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.interactions." + index + ".id"));
        }
        else if (block.type == BlockType.SCORM_SET_INTERACTION_ID) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var itemId = inputValue.getItem("id");
            var id = "";
            if (itemId.block != null) {
                var result = manager.executeBlock(itemId.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    id = result.value;
            }
            pipwerks.SCORM.set("cmi.interactions." + index + ".id", id);
        }
        else if (block.type == BlockType.SCORM_GET_INTERACTION_TYPE) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.interactions." + index + ".type"));
        }
        else if (block.type == BlockType.SCORM_SET_INTERACTION_TYPE) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var inputInteractionType = inputValue.getItem("type");
            if (inputInteractionType.block != null) {
                var result = manager.executeBlock(inputInteractionType.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    type = result.value;
            }

            pipwerks.SCORM.set("cmi.interactions." + index + ".type", type);
        }

        else if (block.type == BlockType.SCORM_GET_OBJECTIVE_COUNT) {
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.objectives._count"));
        }
        else if (block.type == BlockType.SCORM_GET_OBJECTIVE_ID) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.objectives." + index + ".id"));
        }
        else if (block.type == BlockType.SCORM_SET_OBJECTIVE_ID) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var itemId = inputValue.getItem("id");
            var id = "";
            if (itemId.block != null) {
                var result = manager.executeBlock(itemId.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    id = result.value;
            }
            pipwerks.SCORM.set("cmi.objectives." + index + ".id", id);
        }
        else if (block.type == BlockType.SCORM_GET_OBJECTIVE_STATUS) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var statusText = "status";
            if (pipwerks.SCORM.version == "2004")
                statusText = "completion_status";
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.objectives." + index + "."+statusText));
        }
        else if (block.type == BlockType.SCORM_SET_OBJECTIVE_STATUS) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var itemStatus = inputValue.getItem("type");
            var status = "";
            if (itemStatus.block != null) {
                var result = manager.executeBlock(itemStatus.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    status = result.value;

            }

            var statusText = "status";
            if (pipwerks.SCORM.version == "2004")
                statusText = "completion_status";

            pipwerks.SCORM.set("cmi.objectives." + index + "."+statusText, status);
        }
        else if (block.type == BlockType.SCORM_GET_OBJECTIVE_SCORE_RAW) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.objectives." + index + ".score.raw"));
        }
        else if (block.type == BlockType.SCORM_SET_OBJECTIVE_SCORE_RAW) {
            var inputValue = block.getInput("default");

            var itemIndex = inputValue.getItem("index");
            var index = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var itemScore = inputValue.getItem("score");
            var score = "";
            if (itemScore.block != null) {
                var result = manager.executeBlock(itemScore.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    score = result.value;
            }
            pipwerks.SCORM.set("cmi.objectives." + index + ".score.raw", score);
        }

        else if (block.type == BlockType.SCORM_GET_LESSON_STATUS) {
            return manager.returnValue(true, pipwerks.SCORM.status("get"));
        }
        else if (block.type == BlockType.SCORM_SET_LESSON_STATUS) {
            var inputDefault = block.getInput("default");
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    return manager.returnValue(true,  pipwerks.SCORM.status("set", result.value));
            }
        }

        else if (block.type == BlockType.SCORM_GET_USER_DATA) {
            return manager.returnValue(true,  pipwerks.SCORM.get("cmi.suspend_data"));
        }
        else if (block.type == BlockType.SCORM_SET_USER_DATA) {
            var inputDefault = block.getInput("default");
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    pipwerks.SCORM.set("cmi.suspend_data", result.value);
            }
        }
        else if (block.type == BlockType.SCORM_IS_INITIALIZED) {

        }
        else if (block.type == BlockType.SCORM_INITIALIZE) {
            pipwerks.SCORM.init();
        }
        else if (block.type == BlockType.SCORM_SAVE) {
             pipwerks.SCORM.save();
        }
        else if (block.type == BlockType.SCORM_DEINITIALIZE) {
            pipwerks.SCORM.quit();
        }
        else if (block.type == BlockType.SCORM_GET_LAST_ERROR) {
            return manager.returnValue(true, pipwerks.SCORM.debug.getCode());
        }

        else if (block.type == BlockType.SCORM_LESSON_STATUS_TYPES) {
            var inputValue = block.getInput("default");

            var status = inputValue.getItem("status").value;
            if (status == "completed")
                return manager.returnValue(true, "completed");
            else if (status == "incomplete")
                return manager.returnValue(true, "incomplete");
            else if (status == "notAttempted")
                return manager.returnValue(true, "not attempted");
            else if (status == "unknown")
                return manager.returnValue(true, "unknown");
            else if (status == "failed")
                return manager.returnValue(true, "failed");
            else if (status == "browsed")
                return manager.returnValue(true, "browsed");
            else if (status == "passed")
                return manager.returnValue(true, "passed");
            else
                return manager.returnValue(true, "null");
        }
        else if (block.type == BlockType.SCORM_OBJECTIVE_STATUS_TYPES) {
            var inputValue = block.getInput("default");

            var status = inputValue.getItem("status").value;
            if (status == "completed")
                return manager.returnValue(true, "completed");
            else if (status == "incomplete")
                return manager.returnValue(true, "incomplete");
            else if (status == "notAttempted")
                return manager.returnValue(true, "not attempted");
            else if (status == "unknown")
                return manager.returnValue(true, "unknown");
            else if (status == "failed")
                return manager.returnValue(true, "failed");
            else if (status == "browsed")
                return manager.returnValue(true, "browsed");
            else if (status == "passed")
                return manager.returnValue(true, "passed");
            else
                return manager.returnValue(true, "null");
        }
        else if (block.type == BlockType.SCORM_INTERACTION_TYPES) {
            var inputValue = block.getInput("default");
            var type = inputValue.getItem("type").value;

            if (type == "true-false")
                return manager.returnValue(true, "true-false");
            else if (type == "choice")
                return manager.returnValue(true, "choice");
            else if (type == "fill-in")
                return manager.returnValue(true, "fill-in");
            else if (type == "long-fill-in")
                return manager.returnValue(true, "long-fill-in");
            else if (type == "matching")
                return manager.returnValue(true, "matching");
            else if (type == "performance")
                return manager.returnValue(true, "performance");
            else if (type == "sequencing")
                return manager.returnValue(true, "sequencing");
            else if (type == "likert")
                return manager.returnValue(true, "likert");
            else if (type == "numeric")
                return manager.returnValue(true, "numeric");
            else
                return manager.returnValue(true, "null");
        }
        return manager.returnValue(false);
    };

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.SCORM_GET_VALUE);
    this.blockTypes.push(BlockType.SCORM_SET_VALUE);
    this.blockTypes.push(BlockType.SCORM_GET_INTERACTION_COUNT);
    this.blockTypes.push(BlockType.SCORM_GET_INTERACTION_ID);
    this.blockTypes.push(BlockType.SCORM_SET_INTERACTION_ID);
    this.blockTypes.push(BlockType.SCORM_GET_INTERACTION_TYPE);
    this.blockTypes.push(BlockType.SCORM_SET_INTERACTION_TYPE);
    this.blockTypes.push(BlockType.SCORM_GET_OBJECTIVE_COUNT);
    this.blockTypes.push(BlockType.SCORM_GET_OBJECTIVE_ID);
    this.blockTypes.push(BlockType.SCORM_SET_OBJECTIVE_ID);
    this.blockTypes.push(BlockType.SCORM_GET_OBJECTIVE_STATUS);
    this.blockTypes.push(BlockType.SCORM_SET_OBJECTIVE_STATUS);
    this.blockTypes.push(BlockType.SCORM_GET_OBJECTIVE_SCORE_RAW);
    this.blockTypes.push(BlockType.SCORM_SET_OBJECTIVE_SCORE_RAW);
    this.blockTypes.push(BlockType.SCORM_GET_LESSON_STATUS);
    this.blockTypes.push(BlockType.SCORM_SET_LESSON_STATUS);
    this.blockTypes.push(BlockType.SCORM_GET_USER_DATA);
    this.blockTypes.push(BlockType.SCORM_SET_USER_DATA);
    this.blockTypes.push(BlockType.SCORM_IS_INITIALIZED);
    this.blockTypes.push(BlockType.SCORM_INITIALIZE);
    this.blockTypes.push(BlockType.SCORM_SAVE);
    this.blockTypes.push(BlockType.SCORM_DEINITIALIZE);
    this.blockTypes.push(BlockType.SCORM_GET_LAST_ERROR);
    this.blockTypes.push(BlockType.SCORM_LESSON_STATUS_TYPES);
    this.blockTypes.push(BlockType.SCORM_OBJECTIVE_STATUS_TYPES);
    this.blockTypes.push(BlockType.SCORM_INTERACTION_TYPES);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function AnimationPopupDesignObjectController(player, playerData) {
    var DesignObjectType = {
        ANIMATION_POPUP: "animationPopup"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.ANIMATION_POPUP) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.ANIMATION_POPUP) {

        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName == "text")
                return $designObjectElement.val();
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {

        var $designObjectElementCanvas = $("#" + designObject.id + "_canvas");

        if (propertyName == "width") {
            $designObjectElement.css("width", value + "px");

            var width = $designObjectElement.css("width");
            var height = $designObjectElement.css("height");
            $designObjectElementCanvas.attr("width", value);
            $designObjectElement.css("background-size", width + "px " + height + " px");
            //redraw
            var primitive = $designObjectElement.data("controllers.primitive");
            primitive.initialize();
            primitive.refresh();
        }
        else if (propertyName == "height") {
            $designObjectElement.css("height", value + "px");

            var width = $designObjectElement.css("width");
            var height = $designObjectElement.css("height");
            $designObjectElementCanvas.attr("height", value);
            $designObjectElement.css("background-size", width + "px " + height + " px");

            //redraw
            var primitive = $designObjectElement.data("controllers.primitive");
            primitive.initialize();
            primitive.refresh();
        }
        else
            DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.ANIMATION_POPUP);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function SebitFrameworkBlocksController(manager, player, playerData) {
    this.name = "Sebit";

    var hypothesis;

    var BlockType = {
        SEBIT_FRAMEWORK_RESTART_SHOW: "sebitFrameworkRestartShow",
        SEBIT_FRAMEWORK_RESTART_HIDE: "sebitFrameworkRestartHide",
        SEBIT_FRAMEWORK_ON_RESTART_EVENT: "sebitFrameworkOnRestartEvent",

        SEBIT_FRAMEWORK_SCO_COMPLETE: "sebitFrameworkScoComplete",

        SEBIT_FRAMEWORK_SHOW_LOGO: "sebitFrameworkShowLogo",

        SEBIT_FRAMEWORK_QUESTION_SHOW: "sebitFrameworkQuestionShow",
        SEBIT_FRAMEWORK_QUESTION_HIDE: "sebitFrameworkQuestionHide",
        SEBIT_FRAMEWORK_ON_QUESTION_CHOICE_SELECTED_EVENT: "sebitFrameworkOnQuestionChoiceSelectedEvent",
        SEBIT_FRAMEWORK_ON_QUESTION_HIDE_EVENT: "sebitFrameworkOnQuestionHideEvent",

        SEBIT_FRAMEWORK_FEEDBACK_SHOW: "sebitFrameworkFeedbackShow",
        SEBIT_FRAMEWORK_FEEDBACK_HIDE: "sebitFrameworkFeedbackHide",
        SEBIT_FRAMEWORK_ON_FEEDBACK_HIDE_EVENT: "sebitFrameworkOnFeedbackHideEvent",
        SEBIT_FRAMEWORK_NOTIFY_SOUND: "sebitFrameworkNotifySound",
        SEBIT_FRAMEWORK_NOTIFY_SOUND_SOLO: "sebitFrameworkNotifySoundSolo",
        SEBIT_FRAMEWORK_NOTIFY_SOUND_HIDE_EVENT: "sebitFrameworkNotifySoundHideEvent",

        SEBIT_FRAMEWORK_ANIMATION_POPUP_GET_PROPERTY: "sebitFrameworkAnimationPopupGetProperty",
        SEBIT_FRAMEWORK_ANIMATION_POPUP_SET_PROPERTY: "sebitFrameworkAnimationPopupSetProperty",
        SEBIT_FRAMEWORK_ANIMATION_POPUP_SHOW: "sebitFrameworkAnimationPopupShow",
        SEBIT_FRAMEWORK_ANIMATION_POPUP_HIDE: "sebitFrameworkAnimationPopupHide",
        SEBIT_FRAMEWORK_ANIMATION_POPUP_ON_EVENT: "sebitFrameworkAnimationPopupOnEvent",

        SEBIT_FRAMEWORK_HYPOTHESIS_SHOW: "sebitFrameworkHypothesisShow",
        SEBIT_FRAMEWORK_HYPOTHESIS_HIDE: "sebitFrameworkHypothesisHide",
        SEBIT_FRAMEWORK_ON_HYPOTHESIS_CLICK_EVENT: "sebitFrameworkOnHypothesisClickEvent",
        SEBIT_FRAMEWORK_ON_HYPOTHESIS_CHANGED_EVENT: "sebitFrameworkOnHypothesisChangedEvent"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.SEBIT_FRAMEWORK_ON_RESTART_EVENT) {
                            $(Sbt.plugins.NavigationController).on(Sbt.plugins.NavigationController.EVENT_RESTART_BUTTON_CLICKED, { "block": block }, onSebitFrameworkRestartButtonClicked);
                        }
                        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_QUESTION_CHOICE_SELECTED_EVENT) {
                            $(Sbt.QuestionController).on(Sbt.QuestionController.EVENT_CHOICE_SELECTED, { "block": block }, onSebitFrameworkChoiceSelected);
                        }
                        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_QUESTION_HIDE_EVENT) {
                            $(Sbt.QuestionController).on(Sbt.QuestionController.EVENT_HIDE, { "block": block }, onSebitFrameworkQuestionHide);
                        }
                        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_FEEDBACK_HIDE_EVENT) {
                            $(Sbt.FeedbackRichTextController).on(Sbt.FeedbackRichTextController.EVENT_HIDE, { "block": block }, onFeedbackHide);
                        }
                        else if (block.type == BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_ON_EVENT) {
                            var inputDefault = block.getInput("default");
                            var id = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + id);

                            var eventName = "";

                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (eventName == "videoEnded")
                                $designObjectElement.on("onVideoEnded", { "block": block }, onAnimationPopupControllerVideoEvent);
                            else if (eventName == "videoClosed")
                                $designObjectElement.on("onVideoClosed", { "block": block }, onAnimationPopupControllerVideoEvent);                           
                        }
                        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CLICK_EVENT) {
                            if (Sbt.Hypothesis.eventBlocks == undefined)
                                Sbt.Hypothesis.eventBlocks = new Array();

                            Sbt.Hypothesis.eventBlocks.push(block);
                        }
                        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CHANGED_EVENT) {
                            if (Sbt.Hypothesis.eventBlocks == undefined)
                                Sbt.Hypothesis.eventBlocks = new Array();

                            Sbt.Hypothesis.eventBlocks.push(block);
                        }
                        else if (block.type == BlockType.SEBIT_FRAMEWORK_NOTIFY_SOUND_HIDE_EVENT) {
                            $(Sbt.NotifySoundController).on(Sbt.NotifySoundController.EVENT_HIDE, { "block": block }, onNotifySoundHide);
                        }
                    }
                }
            }
        }
    }

    var onHypothesisClickEvent = function (e) {
        var block = e.data.block;
        var hypothesisId = e.data.hypothesisId;

        var eventVariables = manager.createVariables();
        eventVariables.add("hypothesisId", hypothesisId);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onHypothesisChangedEvent = function (e, dropdown) {
        var block = e.data.block;
        var hypothesisId = e.data.hypothesisId;

        var eventVariables = manager.createVariables();
        eventVariables.add("hypothesisId", hypothesisId);
        eventVariables.add("dropDown", dropdown);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onSebitFrameworkRestartButtonClicked = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onSebitFrameworkChoiceSelected = function (e, questionChoice) {
        var block = e.data.block;

        //$(Sbt.QuestionController).off(Sbt.QuestionController.EVENT_CHOICE_SELECTED, onSebitFrameworkChoiceSelected);

        var eventVariables = manager.createVariables();
        eventVariables.add("choiceLetter", questionChoice.keyword);
        eventVariables.add("choiceId", questionChoice.part);
        eventVariables.add("questionId", questionChoice.id);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onSebitFrameworkQuestionHide = function (e, question) {
        var block = e.data.block;

        //$(Sbt.QuestionController).off(Sbt.QuestionController.EVENT_HIDE, onSebitFrameworkQuestionHide);

        var eventVariables = manager.createVariables();
        eventVariables.add("questionId", question.id);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onAnimationPopupVideoEnded = function (e) {
        var block = e.data.block;

        var designObjectElementId = e.currentTarget.container;
        var designObjectElement = $("#" + designObjectElementId);
        designObjectElement.trigger("onVideoEnded", [block]);
    }

    var onAnimationPopupHide = function (e) {
        var block = e.data.block;

        var designObjectElementId = e.currentTarget.container;
        var designObjectElement = $("#" + designObjectElementId);
        designObjectElement.trigger("onVideoClosed", [block]);
    }

    var onAnimationPopupControllerVideoEvent = function (e) {
        var block = e.data.block;

        var designObjectElementId = block.getInput("default").getItem("id").value;
        var $designObjectElement = $("#" + designObjectElementId);
        var animationPopupController = $designObjectElement.data("controllers.animationPopup");

        var eventVariables = manager.createVariables();
        eventVariables.add("animationPopupId", animationPopupController.id);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onFeedbackHide = function (e, feedback) {
        var block = e.data.block;

        //$(Sbt.FeedbackRichTextController).off(Sbt.FeedbackRichTextController.EVENT_HIDE, onFeedbackHide);

        var eventVariables = manager.createVariables();
        eventVariables.add("feedbackId", feedback.id);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onNotifySoundHideWithId = function (e) {
        var block = e.data.block;

        $(Sbt.NotifySoundController).off(Sbt.NotifySoundController.EVENT_HIDE, onNotifySoundHideWithId);

        var inputDefault = block.getInput("default");
        var postFeedbackType = inputDefault.getItem("postFeedbackType") != null ? inputDefault.getItem("postFeedbackType").value : "";

        var postFeedbackId = -1;

        if (inputDefault.block != null) {
            var result = manager.executeBlock(inputDefault.block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
            if (result != null && result.hasReturnValue)
                postFeedbackId = parseInt(result.value);
        }

        if (postFeedbackType == "question") {
            Sbt.QuestionController.id = postFeedbackId;
            Sbt.QuestionController.shortSize = true;
            Sbt.QuestionController.show();
        }
        else if (postFeedbackType == "feedback") {
            Sbt.FeedbackRichTextController.id = postFeedbackId;
            Sbt.FeedbackRichTextController.show();
        }
    }

    var onNotifySoundHide = function (e) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();
        eventVariables.add("notifySoundObject", e.currentTarget.soundFileName);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var getTableByName = function (tableName) {
        return window.VFabrika.dataset[tableName];
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
            }
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_RESTART_SHOW) {
            Sbt.plugins.NavigationController.restartButton.show();
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_RESTART_HIDE) {
            Sbt.plugins.NavigationController.restartButton.hide();
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_RESTART_EVENT) {
            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_SHOW_LOGO) {
            var inputDefault = block.getInput("default");
            var criteria = inputDefault.getItem("criteria").value;

            if (criteria == "show")
                Sbt.plugins.NavigationController.hasLogo = true;
            else if (criteria == "hide")
                Sbt.plugins.NavigationController.hasLogo = false;
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_SCO_COMPLETE) {
            framework.widgetController.Complete();
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_QUESTION_SHOW) {
            var inputDefault = block.getInput("default");
            var value = 1;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            Sbt.QuestionController.id = value;
            Sbt.QuestionController.show();
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_QUESTION_HIDE) {
            Sbt.QuestionController.hideQuestion();
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_QUESTION_CHOICE_SELECTED_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var choiceLetter = eventVariables.getValue("choiceLetter");
            var choiceId = eventVariables.getValue("choiceId");
            var questionId = eventVariables.getValue("questionId");

            scopeVariables_.push(manager.createVariable("choiceLetter", choiceLetter));
            scopeVariables_.push(manager.createVariable("choiceId", choiceId));
            scopeVariables_.push(manager.createVariable("questionId", questionId));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_QUESTION_HIDE_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var questionId = eventVariables.getValue("questionId");

            scopeVariables_.push(manager.createVariable("questionId", questionId));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_HYPOTHESIS_SHOW) {
            // unbind events if there is an instance
            if (hypothesis != undefined) {
                if (Sbt.Hypothesis.eventBlocks != undefined) {
                    for (var eventBlockIndex = 0; eventBlockIndex < Sbt.Hypothesis.eventBlocks.length; eventBlockIndex++) {
                        var eventBlock = Sbt.Hypothesis.eventBlocks[eventBlockIndex];
                        var defaultInput = eventBlock.getInput("default");

                        if (eventBlock.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CLICK_EVENT)
                            $(hypothesis).off(Sbt.Hypothesis.Event.CLICK, onHypothesisClickEvent);
                        else if (eventBlock.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CHANGED_EVENT)
                            $(hypothesis).off(Sbt.Hypothesis.Event.CHANGED, onHypothesisChangedEvent);
                    }
                    hypothesis = undefined;
                    //Sbt.Hypothesis.eventBlocks = undefined;
                }
            }

            var hypothesisTable = getTableByName("Hypothesis");
            if (hypothesisTable != null) {

                var inputDefault = block.getInput("default");
                var hypothesisId = 1;
                if (inputDefault.block != null) {
                    var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                    if (result != null && result.hasReturnValue)
                        hypothesisId = result.value;
                }

                var predictionText = hypothesisTable[hypothesisId - 1]["predictionText"];

                hypothesis = new Sbt.Hypothesis({
                    question: hypothesisTable[hypothesisId - 1]["questionText"],
                    prediction: "",
                    width: hypothesisTable[hypothesisId - 1]["width"],
                    height: hypothesisTable[hypothesisId - 1]["height"],
                    position: [hypothesisTable[hypothesisId - 1]["positionX"], hypothesisTable[hypothesisId - 1]["positionY"]]
                });

                Sbt.Hypothesis.instance = hypothesis;

                var hypothesisControlsTable = getTableByName("HypothesisControls");
                if (hypothesisControlsTable != null) {
                    var hypothesisControlItemsTable = getTableByName("HypothesisControlItems");
                    if (hypothesisControlItemsTable != null) {
                        for (var i = 0; i < hypothesisControlsTable.length; i++) {
                            if (hypothesisControlsTable[i]["hypothesisId"] == hypothesisId) {
                                predictionText = predictionText.replace("{{" + hypothesisControlsTable[i]["name"] + "}}", "<div id='" + hypothesisControlsTable[i]["name"] + "'></div>");

                                var maxWidth = 50;
                                var items = [];
                                for (var j = 0; j < hypothesisControlItemsTable.length; j++) {
                                    if (hypothesisControlItemsTable[j]["hypothesisControlId"] == hypothesisControlsTable[i]["id"]) {
                                        items.push({ "text": "<span style='color:#000'>" + hypothesisControlItemsTable[j]["text"] + "</span>", "value": hypothesisControlItemsTable[j]["value"] });
                                        var width = hypothesisControlItemsTable[j]["text"].length * 8 + 10;
                                        if (width > maxWidth)
                                            maxWidth = width;
                                    }
                                }

                                
                                hypothesis.DropDownList.Add(hypothesisControlsTable[i]["name"], {
                                    width: maxWidth,
                                    height: 30,
                                    items: items
                                });
                            }
                        }

                        hypothesis.prediction = predictionText;

                        if (Sbt.Hypothesis.eventBlocks != undefined) {
                            for (var eventBlockIndex = 0; eventBlockIndex < Sbt.Hypothesis.eventBlocks.length; eventBlockIndex++) {
                                var eventBlock = Sbt.Hypothesis.eventBlocks[eventBlockIndex];
                                var defaultInput = eventBlock.getInput("default");

                                if (eventBlock.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CLICK_EVENT)
                                    $(hypothesis).on(Sbt.Hypothesis.Event.CLICK, { "block": eventBlock, "hypothesisId": hypothesisId }, onHypothesisClickEvent);
                                else if (eventBlock.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CHANGED_EVENT)
                                    $(hypothesis).on(Sbt.Hypothesis.Event.CHANGED, { "block": eventBlock, "hypothesisId": hypothesisId }, onHypothesisChangedEvent);
                            }
                        }

                        hypothesis.Show();
                    }
                }
            }
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_HYPOTHESIS_HIDE) {
            // unbind events if there is an instance
            if (hypothesis != undefined) {
                hypothesis.Close();
                if (Sbt.Hypothesis.eventBlocks != undefined) {
                    for (var eventBlockIndex = 0; eventBlockIndex < Sbt.Hypothesis.eventBlocks.length; eventBlockIndex++) {
                        var eventBlock = Sbt.Hypothesis.eventBlocks[eventBlockIndex];
                        var defaultInput = eventBlock.getInput("default");

                        if (eventBlock.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CLICK_EVENT)
                            $(hypothesis).off(Sbt.Hypothesis.Event.CLICK, onHypothesisClickEvent);
                        else if (eventBlock.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CHANGED_EVENT)
                            $(hypothesis).off(Sbt.Hypothesis.Event.CHANGED, onHypothesisChangedEvent);
                    }
                    //Sbt.Hypothesis.eventBlocks = undefined;
                }
                hypothesis = undefined;
            }
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CLICK_EVENT) {
            var inputDefault = block.getInput("default");
            var hypothesisId = eventVariables.getValue("hypothesisId");

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            scopeVariables_.push(manager.createVariable("hypothesisId", hypothesisId));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CHANGED_EVENT) {
            var inputDefault = block.getInput("default");

            var hypothesisId = eventVariables.getValue("hypothesisId");
            var dropDownName = eventVariables.getValue("dropDown").containerName;
            var dropDownValue = eventVariables.getValue("dropDown").value;

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            scopeVariables_.push(manager.createVariable("hypothesisId", hypothesisId));
            scopeVariables_.push(manager.createVariable("dropDownName", dropDownName));
            scopeVariables_.push(manager.createVariable("dropDownValue", dropDownValue));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_FEEDBACK_SHOW) {
            var inputDefault = block.getInput("default");
            var value = 1;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            Sbt.FeedbackRichTextController.id = value;
            Sbt.FeedbackRichTextController.show();
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_FEEDBACK_HIDE) {
            Sbt.FeedbackRichTextController.hideFeedbackRichText();
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ON_FEEDBACK_HIDE_EVENT) {
            var feedbackId = eventVariables.getValue("feedbackId");

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            var scopeVariable = {};
            scopeVariable.name = "feedbackId";
            scopeVariable.value = parseInt(feedbackId);
            scopeVariables_.push(scopeVariable);

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_NOTIFY_SOUND) {
            var inputDefault = block.getInput("default");

            var notifySoundName = inputDefault.getItem("notifySound").value;
            var isCorrect;

            if (notifySoundName.substring(0, notifySoundName.length - 1) == "correct")
                isCorrect = true;
            else if (notifySoundName.substring(0, notifySoundName.length - 1) == "wrong")
                isCorrect = false;

            // parse id after notifySoundName
            var notifySoundIdStr = "";
            var notifySoundId = -1;

            for (var i = notifySoundName.length - 1; i >= 0; i--) {
                notifySoundIdStr = notifySoundName.charAt(i) + notifySoundIdStr;

                var id = parseInt(notifySoundIdStr);
                if (!isNaN(id))
                    notifySoundId = id;
                else
                    break;
            }

            if (notifySoundId != -1) {              
                Sbt.NotifySoundController.isCorrect = isCorrect;
                Sbt.NotifySoundController.soundType = notifySoundId;
                Sbt.NotifySoundController.show();

                $(Sbt.NotifySoundController).on(Sbt.NotifySoundController.EVENT_HIDE, { "block": block }, onNotifySoundHideWithId);
            }
            else
                throw new Error("Notify Sound Id is invalid.");
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_NOTIFY_SOUND_SOLO) {
            var inputDefault = block.getInput("default");

            var notifySoundName = inputDefault.getItem("notifySound").value;
            var isCorrect;

            if (notifySoundName.substring(0, notifySoundName.length - 1) == "correct")
                isCorrect = true;
            else if (notifySoundName.substring(0, notifySoundName.length - 1) == "wrong")
                isCorrect = false;   
                       
            Sbt.NotifySoundController.isCorrect = isCorrect;
            Sbt.NotifySoundController.soundType = notifySoundId;
            Sbt.NotifySoundController.show();         
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_NOTIFY_SOUND_HIDE_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var notifySoundObjectFromFramework = eventVariables.getValue("notifySoundObject");

            var notifySoundObject;
            if (notifySoundObjectFromFramework == "true_1")
                notifySoundObject = "correct1";
            else if (notifySoundObjectFromFramework == "true_2")
                notifySoundObject = "correct2";
            else if (notifySoundObjectFromFramework == "true_3")
                notifySoundObject = "correct3";
            else if (notifySoundObjectFromFramework == "false_1")
                notifySoundObject = "wrong1";
            else if (notifySoundObjectFromFramework == "false_2")
                notifySoundObject = "wrong2";
            else if (notifySoundObjectFromFramework == "false_3")
                notifySoundObject = "wrong3";

            scopeVariables_.push(manager.createVariable("notifySoundObject", notifySoundObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_SHOW) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectId);
            designObjectSelector.css("display", "block");

            var index = 0;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var containerId = inputDefault.getItem("id").value;
            var animationPopupController = new Sbt.AnimationPopupController();

            $(animationPopupController).on(animationPopupController.EVENT_VIDEO_ENDED, { "block": block }, onAnimationPopupVideoEnded);

            $(animationPopupController).on(animationPopupController.EVENT_HIDE, { "block": block }, onAnimationPopupHide);

            animationPopupController.container = containerId;
            animationPopupController.id = index;
            animationPopupController.show();

            designObjectSelector.data("controllers.animationPopup", animationPopupController);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_HIDE) {
            var inputDefault = block.getInput("default");
            var containerId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + containerId);
            designObjectSelector.css("display", "none");
            var animationPopupController = designObjectSelector.data("controllers.animationPopup");
            animationPopupController.hide();
            $(animationPopupController).off(animationPopupController.EVENT_VIDEO_ENDED, onAnimationPopupVideoEnded);
        }
        else if (block.type == BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_ON_EVENT) {
            var inputBlock = block.getInput("block");

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            var animationPopupId = eventVariables.getValue("animationPopupId");
            scopeVariables_.push(manager.createVariable("animationPopupId", animationPopupId));

            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }

        return manager.returnValue(false);
    }
    
    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_RESTART_SHOW);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_RESTART_HIDE);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ON_RESTART_EVENT);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_SCO_COMPLETE);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_SHOW_LOGO);

    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_FEEDBACK_SHOW);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_FEEDBACK_HIDE);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ON_FEEDBACK_HIDE_EVENT);

    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_QUESTION_SHOW);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_QUESTION_HIDE);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ON_QUESTION_CHOICE_SELECTED_EVENT);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ON_QUESTION_HIDE_EVENT);

    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_NOTIFY_SOUND);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_NOTIFY_SOUND_SOLO);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_NOTIFY_SOUND_HIDE_EVENT);

    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_SHOW);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_HIDE);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_ON_EVENT);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_GET_PROPERTY);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ANIMATION_POPUP_SET_PROPERTY);

    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_HYPOTHESIS_SHOW);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_HYPOTHESIS_HIDE);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CLICK_EVENT);
    this.blockTypes.push(BlockType.SEBIT_FRAMEWORK_ON_HYPOTHESIS_CHANGED_EVENT);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function PrimitiveDesignObjectsController(player, playerData) {
    var DesignObjectType = {
        PRIMITIVE_ELLIPSE: "primitiveEllipse",
        PRIMITIVE_RECTANGLE: "primitiveRectangle",
        PRIMITIVE_ROUNDED_RECTANGLE: "primitiveRoundedRectangle",
        PRIMITIVE_TRIANGLE: "primitiveTriangle"
    };

    var PrimitiveDesignObjectPropertyName = {
        CORNER_RADIUS: "cornerRadius",
        FILL_COLOR: "fillColor",
        STROKE_THICKNESS: "strokeThickness",
        STROKE_COLOR: "strokeColor"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.PRIMITIVE_ELLIPSE ||
            designObject.type == DesignObjectType.PRIMITIVE_RECTANGLE ||
            designObject.type == DesignObjectType.PRIMITIVE_ROUNDED_RECTANGLE ||
            designObject.type == DesignObjectType.PRIMITIVE_TRIANGLE) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'><canvas style='position:absolute;' id='" + designObjectElementId + "_canvas'></canvas></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
        var $designObjectElementCanvas = $("#" + designObjectElementId + "_canvas");

        $designObjectElement.css("width", designObject.width + "px");
        $designObjectElement.css("height", designObject.height + "px");
        $designObjectElementCanvas.attr("width", designObject.width);
        $designObjectElementCanvas.attr("height", designObject.height);

        if (designObject.type == DesignObjectType.PRIMITIVE_ELLIPSE) {

            var primitive = new Primitive(designObjectElementId, PrimitiveType.ELLIPSE);
            primitive.strokeColor = designObject.strokeColor;
            primitive.strokeThickness = designObject.strokeThickness;
            primitive.fillColor = designObject.fillColor;
            primitive.initialize();
            primitive.refresh();

            $designObjectElement.data("controllers.primitive", primitive);

        } else if (designObject.type == DesignObjectType.PRIMITIVE_RECTANGLE) {

            var primitive = new Primitive(designObjectElementId, PrimitiveType.RECTANGLE);
            primitive.strokeColor = designObject.strokeColor;
            primitive.strokeThickness = designObject.strokeThickness;
            primitive.fillColor = designObject.fillColor;
            primitive.initialize();
            primitive.refresh();

            $designObjectElement.data("controllers.primitive", primitive);
        } else if (designObject.type == DesignObjectType.PRIMITIVE_ROUNDED_RECTANGLE) {

            var primitive = new Primitive(designObjectElementId, PrimitiveType.ROUNDED_RECTANGLE);
            primitive.strokeColor = designObject.strokeColor;
            primitive.strokeThickness = designObject.strokeThickness;
            primitive.fillColor = designObject.fillColor;
            primitive.cornerRadius = designObject.cornerRadius;
            primitive.initialize();
            primitive.refresh();

            $designObjectElement.data("controllers.primitive", primitive);
        } else if (designObject.type == DesignObjectType.PRIMITIVE_TRIANGLE) {

            var primitive = new Primitive(designObjectElementId, PrimitiveType.TRIANGLE);
            primitive.strokeColor = designObject.strokeColor;
            primitive.strokeThickness = designObject.strokeThickness;
            primitive.fillColor = designObject.fillColor;
            primitive.initialize();
            primitive.refresh();

            $designObjectElement.data("controllers.primitive", primitive);
        }
    };

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        primitive = $designObjectElement.data("controllers.primitive");

        var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
        var $designObjectElementCanvas = $("#" + designObjectElementId + "_canvas");

        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        var tweenStrokeThickness = DesignObjectHelper.calculateStrokeThickness(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenFillColor = DesignObjectHelper.calculateColor(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime, "fillColor");
        var tweenStrokeColor = DesignObjectHelper.calculateColor(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime, "strokeColor");
        var tweenCornerRadius = DesignObjectHelper.calculateCornerRadius(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setSizeAttributes($designObjectElementCanvas, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);

        primitive.strokeColor = tweenStrokeColor;
        primitive.strokeThickness = tweenStrokeThickness;
        primitive.fillColor = tweenFillColor;

        if (designObject.type == DesignObjectType.PRIMITIVE_ROUNDED_RECTANGLE)
            primitive.cornerRadius = tweenCornerRadius;

        primitive.refresh();
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.CORNER_RADIUS.toLowerCase()) {
                var designObjectSelector = $("#" + designObject.id);
                var primitive = designObjectSelector.data("controllers.primitive");
                if (primitive = ! null)
                    return primitive.cornerRadius;
                else
                    return null;
            } else if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.FILL_COLOR.toLowerCase()) {
                var designObjectSelector = $("#" + designObject.id);
                var primitive = designObjectSelector.data("controllers.primitive");
                if (primitive = ! null)
                    return primitive.fillColor;
                else
                    return null;
            } else if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.STROKE_COLOR.toLowerCase()) {
                var designObjectSelector = $("#" + designObject.id);
                var primitive = designObjectSelector.data("controllers.primitive");
                if (primitive = ! null)
                    return primitive.strokeColor;
                else
                    return null;
            } else if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.STROKE_THICKNESS.toLowerCase()) {
                var designObjectSelector = $("#" + designObject.id);
                var primitive = designObjectSelector.data("controllers.primitive");
                if (primitive = ! null)
                    return primitive.strokeThickness;
                else
                    return null;
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {

        var $designObjectElementCanvas = $("#" + designObject.id + "_canvas");

        if (propertyName.toLowerCase() == "width") {
            $designObjectElement.css("width", value + "px");

            var width = $designObjectElement.css("width");
            var height = $designObjectElement.css("height");
            $designObjectElementCanvas.attr("width", value);
            $designObjectElement.css("background-size", width + "px " + height + " px");
            //redraw
            var primitive = $designObjectElement.data("controllers.primitive");
            primitive.initialize();
            primitive.refresh();
        }
        else if (propertyName.toLowerCase() == "height") {
            $designObjectElement.css("height", value + "px");

            var width = $designObjectElement.css("width");
            var height = $designObjectElement.css("height");
            $designObjectElementCanvas.attr("height", value);
            $designObjectElement.css("background-size", width + "px " + height + " px");

            //redraw
            var primitive = $designObjectElement.data("controllers.primitive");
            primitive.initialize();
            primitive.refresh();
        }
        else {
            var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
            if (!result) {

                var designObjectSelector = $("#" + designObject.id);
                var designObject = designObjectSelector.data("designObject");
                var primitive = designObjectSelector.data("controllers.primitive");

                if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.CORNER_RADIUS.toLowerCase()) {
                    primitive.cornerRadius = value;
                    primitive.refresh();

                    designObject.cornerRadius = primitive.cornerRadius;
                } else if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.FILL_COLOR.toLowerCase()) {
                    primitive.fillColor = value;
                    primitive.refresh();

                    designObject.fillColor = primitive.fillColor;
                } else if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.STROKE_COLOR.toLowerCase()) {
                    primitive.strokeColor = value;
                    primitive.refresh();

                    designObject.strokeColor = primitive.strokeColor;
                } else if (propertyName.toLowerCase() == PrimitiveDesignObjectPropertyName.STROKE_THICKNESS.toLowerCase()) {
                    primitive.strokeThickness = value;
                    primitive.refresh();

                    designObject.strokeThickness = primitive.strokeThicness;
                }
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.PRIMITIVE_ELLIPSE);
    this.designObjectTypes.push(DesignObjectType.PRIMITIVE_RECTANGLE);
    this.designObjectTypes.push(DesignObjectType.PRIMITIVE_ROUNDED_RECTANGLE);
    this.designObjectTypes.push(DesignObjectType.PRIMITIVE_TRIANGLE);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function PrimitiveDesignObjectsBlocksController(manager, player, playerData) {
    this.name = "Primitive";

    var BlockType = {
        PRIMITIVE_DESIGN_OBJECT_SET_PROPERTY: "primitiveDesignObjectSetProperty",
        PRIMITIVE_DESIGN_OBJECT_GET_PROPERTY: "primitiveDesignObjectGetProperty",
        PRIMITIVE_DESIGN_OBJECT_SET_CORNER_RADIUS: "primitiveDesignObjectSetCornerRadius",
        PRIMITIVE_DESIGN_OBJECT_GET_CORNER_RADIUS: "primitiveDesignObjectGetCornerRadius",
        PRIMITIVE_DESIGN_OBJECT_SET_FILL_COLOR: "primitiveDesignObjectSetFillColor",
        PRIMITIVE_DESIGN_OBJECT_GET_FILL_COLOR: "primitiveDesignObjectGetFillColor",
        PRIMITIVE_DESIGN_OBJECT_SET_STROKE_THICKNESS: "primitiveDesignObjectSetStrokeThickness",
        PRIMITIVE_DESIGN_OBJECT_GET_STROKE_THICKNESS: "primitiveDesignObjectGetStrokeThickness",
        PRIMITIVE_DESIGN_OBJECT_SET_STROKE_COLOR: "primitiveDesignObjectSetStrokeColor",
        PRIMITIVE_DESIGN_OBJECT_GET_STROKE_COLOR: "primitiveDesignObjectGetStrokeColor",

        PRIMITIVE_DESIGN_OBJECT_ON_MOUSE_EVENT: "primitiveDesignObjectOnMouseEvent",
        PRIMITIVE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT: "primitiveDesignObjectOnDragAndDropEvent",
        PRIMITIVE_DESIGN_OBJECT_ON_DRAG_EVENT: "primitiveDesignObjectOnDragEvent"
    };

    this.preInitialize = function () {

    };

    this.initialize = function () {
        initializeEvents();
    };

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];
                        if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                        }
                        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
                            var inputDefault = block.getInput("default");
                            var id = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + id);

                            var dropProxyObject = player.createDropHandlerForDesignObject(id);
                            $(dropProxyObject).on("drop", { "block": block }, onDrop);
                        }
                        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_ON_DRAG_EVENT) {
                            var inputDefault = block.getInput("default");
                            var designObjectId = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + designObjectId);
                            var eventName = inputDefault.getItem("eventName").value;

                            if (designObjectId != "" && eventName != "") {
                                player.createDragMembersForDesignObject(designObjectId);
                                var dragHandler = $designObjectElement.data("controllers.dragHandler");
                                $(dragHandler).on(eventName, { "block": block }, onDrag);
                            }
                        }
                    }
                }
            }
        }
    }

    var onDrop = function (e, dropObj, dragObj) {
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj);
        eventVariables.add("dropObject", dropObj.designObject);

        var block = e.data.block;
        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onDrag = function (e, dragObj) {
        var block = e.data.block;
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    var onBlockEvent = function (e) {
        var block = e.data.block;

        var pageX = e.Sbt.touches[0].pageX;
        var pageY = e.Sbt.touches[0].pageY;
        var offset = Sbt.utilities.Dom.getOffset($(e.currentTarget));
        var posLeft = pageX - offset.left - $(window).scrollLeft();
        var posTop = pageY - offset.top - $(window).scrollTop();

        var eventVariables = manager.createVariables();
        eventVariables.add("x", posLeft);
        eventVariables.add("y", posTop);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    };

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            scopeVariables_.push(manager.createVariable("x", eventVariables.getValue("x")));
            scopeVariables_.push(manager.createVariable("y", eventVariables.getValue("y")));

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
            }
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            var dropObject = eventVariables.getValue("dropObject");

            scopeVariables_.push(manager.createVariable("dragObject", dragObject));
            scopeVariables_.push(manager.createVariable("dropObject", dropObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_ON_DRAG_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            scopeVariables_.push(manager.createVariable("dragObject", dragObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_SET_CORNER_RADIUS) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    primitive.cornerRadius = result.value;
                    primitive.refresh();

                    designObject.cornerRadius = primitive.cornerRadius;
                }
            }
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_GET_CORNER_RADIUS) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            return manager.returnValue(true, primitive.cornerRadius);
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_SET_STROKE_THICKNESS) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    primitive.strokeThickness = result.value;
                    primitive.refresh();

                    designObject.strokeThickness = primitive.strokeThicness;
                }
            }
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_GET_STROKE_THICKNESS) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            return manager.returnValue(true, primitive.strokeThickness);
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_SET_STROKE_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    primitive.strokeColor = result.value;
                    primitive.refresh();

                    designObject.strokeColor = primitive.strokeColor;
                }
            }
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_GET_STROKE_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            return manager.returnValue(true, primitive.strokeColor);
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_SET_FILL_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    primitive.fillColor = result.value;
                    primitive.refresh();

                    designObject.fillColor = primitive.fillColor;
                }
            }
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_GET_FILL_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var primitive = designObjectSelector.data("controllers.primitive");

            return manager.returnValue(true, primitive.fillColor);
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, $designObjectElement.attr("class"));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
        }
        else if (block.type == BlockType.PRIMITIVE_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;
            var $designObjectElement = $("#" + id);
            var designObjectElement = $designObjectElement[0];
            var $designObjectElementCanvas = $("#" + id + "_canvas");
            var designObject = $designObjectElement.data("designObject");
            var value = null;

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    value = result.value;

                    if (propertyName == "locationX")
                        $designObjectElement.css("left", value + "px");
                    else if (propertyName == "locationY")
                        $designObjectElement.css("top", value + "px");
                    else if (propertyName == "width") {
                        $designObjectElement.css("width", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElementCanvas.attr("width", value);
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                        //redraw
                        var primitive = $designObjectElement.data("controllers.primitive");
                        primitive.initialize();
                        primitive.refresh();
                    }
                    else if (propertyName == "height") {
                        $designObjectElement.css("height", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElementCanvas.attr("height", value);
                        $designObjectElement.css("background-size", width + "px " + height + " px");

                        //redraw
                        var primitive = $designObjectElement.data("controllers.primitive");
                        primitive.initialize();
                        primitive.refresh();
                    }
                    else if (propertyName == "rotation") {
                        designObject.rotation = value;
                        DesignObjectHelper.applyRotation($designObjectElement, designObject);
                    }
                    else if (propertyName == "isDroppable") {
                        designObject.isDroppable = value;

                        if (value)
                            player.enableDesignObjectAsDroppable(id);
                        else
                            player.disableDesignObjectAsDroppable(id);
                    }
                    else if (propertyName == "isDraggable") {
                        designObject.isDraggable = value;

                        if (value)
                            player.enableDesignObjectAsDraggable(id);
                        else
                            player.disableDesignObjectAsDraggable(id);
                    }
                    else if (propertyName == "visible") {
                        designObject.visible = value;
                        if (value)
                            $designObjectElement.css("display", "block");
                        else
                            $designObjectElement.css("display", "none");
                    }
                    else if (propertyName == "enabled") {
                        designObject.enabled = value;

                        if (value)
                            $designObjectElement.removeAttr("disabled");
                        else
                            $designObjectElement.attr("disabled", "disabled");
                    }
                    else if (propertyName == "alpha") {
                        if (value < 0)
                            value = 0;
                        if (value > 100)
                            value = 100;
                        designObject.alpha = value;
                        value = parseFloat(value / 100);
                        $designObjectElement.css("opacity", value);
                    }
                    else if (propertyName == "className")
                        $designObjectElement.attr("class", value);
                    else if (propertyName == "tag")
                        designObject.tag = value;
                    else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                        if (!value)
                            $designObjectElement.css("cursor", "default");
                        else
                            $designObjectElement.css("cursor", "pointer");

                        designObject.useHandCursor = value;
                    }
                }
            }
        }

        return manager.returnValue(false);
    };
    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_SET_CORNER_RADIUS);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_GET_CORNER_RADIUS);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_SET_FILL_COLOR);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_GET_FILL_COLOR);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_SET_STROKE_THICKNESS);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_GET_STROKE_THICKNESS);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_SET_STROKE_COLOR);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_GET_STROKE_COLOR);

    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_ON_MOUSE_EVENT);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT);
    this.blockTypes.push(BlockType.PRIMITIVE_DESIGN_OBJECT_ON_DRAG_EVENT);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function SmartDesignObjectsController(player, playerData) {
    var DesignObjectType = {
        PARALLAX_SCROLL: "parallaxScroll",
        POLYGON: "polygon"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.PARALLAX_SCROLL) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<canvas id='" + designObjectElementId + "'></canvas>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        } else if (designObject.type == DesignObjectType.POLYGON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<canvas id='" + designObjectElementId + "'></canvas>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.PARALLAX_SCROLL) {
            $designObjectElement.attr("width", designObject.width);
            $designObjectElement.attr("height", designObject.height);

            // parallaxScroll
            var parallaxScroll = new ParallaxScroll(designObject);
            parallaxScroll.initialize();

            $designObjectElement.data("controllers.parallaxScroll", parallaxScroll);

            if (designObject.autoPlay)
                parallaxScroll.play();
        } else if (designObject.type == DesignObjectType.POLYGON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

            $designObjectElement.attr("width", designObject.width);
            $designObjectElement.attr("height", designObject.height);

            var polygon = new Polygon(designObjectElementId);
            polygon.edgeCount = designObject.edgeCount;
            polygon.strokeColor = designObject.strokeColor;
            polygon.strokeThickness = designObject.strokeThickness;
            polygon.fillColor = designObject.fillColor;
            polygon.startAngle = designObject.startAngle;
            polygon.initialize();
            polygon.refresh();

            $designObjectElement.data("controllers.polygon", polygon);
        }
    }

    this.frameChanged = function($designObjectElement, designObject, keyframe, nextFrameBlock) {
        if (designObject.type == DesignObjectType.POLYGON) {
            var polygon = $designObjectElement.data("controllers.polygon");
            polygon.refresh();
        }
    };

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName == "text")
                return $designObjectElement.val();
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.PARALLAX_SCROLL);
    this.designObjectTypes.push(DesignObjectType.POLYGON);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function SmartDesignObjectsBlocksController(manager, player, playerData) {
    this.name = "Smart";

    var BlockType = {
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_PLAY: "smartDesignObjectsParallaxScrollPlay",
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_STOP: "smartDesignObjectsParallaxScrollStop",
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_SPEED: "smartDesignObjectsParallaxScrollSetSpeed",
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_DIRECTION: "smartDesignObjectsParallaxScrollSetDirection",
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_STEP: "smartDesignObjectsParallaxScrollSetStep",
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_PROPERTY: "smartDesignObjectsParallaxScrollSetProperty",
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_GET_PROPERTY: "smartDesignObjectsParallaxScrollGetProperty",
        SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_ON_MOUSE_EVENT: "smartDesignObjectsParallaxScrollOnMouseEvent",

        POLYGON_DESIGN_OBJECT_SET_EDGE_COUNT: "polygonDesignObjectSetEdgeCount",
        POLYGON_DESIGN_OBJECT_GET_EDGE_COUNT: "polygonDesignObjectGetEdgeCount",
        POLYGON_DESIGN_OBJECT_SET_STROKE_THICKNESS: "polygonDesignObjectSetStrokeThickness",
        POLYGON_DESIGN_OBJECT_GET_STROKE_THICKNESS: "polygonDesignObjectGetStrokeThickness",
        POLYGON_DESIGN_OBJECT_SET_STROKE_COLOR: "polygonDesignObjectSetStrokeColor",
        POLYGON_DESIGN_OBJECT_GET_STROKE_COLOR: "polygonDesignObjectGetStrokeColor",
        POLYGON_DESIGN_OBJECT_SET_FILL_COLOR: "polygonDesignObjectSetFillColor",
        POLYGON_DESIGN_OBJECT_GET_FILL_COLOR: "polygonDesignObjectGetFillColor",
        POLYGON_DESIGN_OBJECT_SET_START_ANGLE: "polygonDesignObjectSetStartAngle",
        POLYGON_DESIGN_OBJECT_GET_START_ANGLE: "polygonDesignObjectGetStartAngle",
        POLYGON_DESIGN_OBJECT_SET_PROPERTY: "polygonDesignObjectSetProperty",
        POLYGON_DESIGN_OBJECT_GET_PROPERTY: "polygonDesignObjectGetProperty",
        POLYGON_DESIGN_OBJECT_ON_MOUSE_EVENT: "polygonDesignObjectOnMouseEvent"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    };

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_ON_MOUSE_EVENT ||
                            block.type == BlockType.POLYGON_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                        }                       
                    }
                }
            }
        }
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;

        var pageX = e.Sbt.touches[0].pageX;
        var pageY = e.Sbt.touches[0].pageY;
        var offset = Sbt.utilities.Dom.getOffset($(e.currentTarget));
        var posLeft = pageX - offset.left - $(window).scrollLeft();
        var posTop = pageY - offset.top - $(window).scrollTop();

        var eventVariables = manager.createVariables();
        eventVariables.add("x", posLeft);
        eventVariables.add("y", posTop);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_PLAY) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);

            var parallaxScroll = designObjectSelector.data("controllers.parallaxScroll");
            if (!parallaxScroll.isPlaying)
                parallaxScroll.play();
        } else if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_STOP) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);

            var parallaxScroll = designObjectSelector.data("controllers.parallaxScroll");
            if (parallaxScroll.isPlaying)
                parallaxScroll.stop();
        } else if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_SPEED) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");

            var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
            if (result != null && result.hasReturnValue) {
                var value = parseInt(result.value);

                var parallaxScroll = designObjectSelector.data("controllers.parallaxScroll");
                parallaxScroll.scrollSpeed = value;
            }
        } else if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_DIRECTION) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var value = inputDefault.getItem("value").value;
            var parallaxScroll = designObjectSelector.data("controllers.parallaxScroll");
            parallaxScroll.scrollDirection = value;
        //} else if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_STEP) {
        //    var inputDefault = block.getInput("default");
        //    var designObjectElementId = inputDefault.getItem("id").value;
        //    var designObjectSelector = $("#" + designObjectElementId);
        //    var designObject = designObjectSelector.data("designObject");
        //    var result = manager.executeBlock(inputDefault.block, scopeVariables, false, parameters);
        //    if (result != null && result.hasReturnValue) {
        //        var value = parseInt(result.value);
        //        var parallaxScroll = designObjectSelector.data("controllers.parallaxScroll");
        //        parallaxScroll.scrollStep = value;
        //    }
        } else if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional BLOCK OF CODE for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        } else if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "value") {
                var dropDown = designObjectSelector.data("controllers.dropDownList");
                return manager.returnValue(true, dropDown.selected.value);
            }
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
        } else if (block.type == BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "rotation") {
                    designObject.rotation = value;
                    DesignObjectHelper.applyRotation($designObjectElement, designObject);
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
                else if (propertyName == "value") {
                    var dropDown = designObjectSelector.data("controllers.dropDownList");
                    var dropDownItems = dropDown.data.items;
                    if (dropDownItems != null) {

                        for (var i = 0; i < dropDownItems.length; i++) {
                            if (dropDownItems[i].value == newValue) {
                                dropDown.selectedIndex = i;
                                break;
                            }
                        }
                    }

                }
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_SET_EDGE_COUNT) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    polygon.edgeCount = result.value;
                    polygon.refresh();

                    designObject.edgeCount = polygon.edgeCount;
                }
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_GET_EDGE_COUNT) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            return manager.returnValue(true, polygon.edgeCount);
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_SET_START_ANGLE) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    polygon.startAngle = result.value;
                    polygon.refresh();

                    designObject.startAngle = polygon.startAngle;
                }
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_GET_START_ANGLE) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            return manager.returnValue(true, polygon.startAngle);
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_SET_STROKE_THICKNESS) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    polygon.strokeThickness = result.value;
                    polygon.refresh();

                    designObject.strokeThickness = polygon.strokeThicness;
                }
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_GET_STROKE_THICKNESS) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            return manager.returnValue(true, polygon.strokeThickness);
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_SET_STROKE_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    polygon.strokeColor = result.value;
                    polygon.refresh();

                    designObject.strokeColor = polygon.strokeColor;
                }
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_GET_STROKE_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            return manager.returnValue(true, polygon.strokeColor);
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_SET_FILL_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    polygon.fillColor = result.value;
                    polygon.refresh();

                    designObject.fillColor = polygon.fillColor;
                }
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_GET_FILL_COLOR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var designObject = designObjectSelector.data("designObject");
            var polygon = designObjectSelector.data("controllers.polygon");

            return manager.returnValue(true, polygon.fillColor);
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, $designObjectElement.attr("class"));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "value") {
                if (block.type == BlockType.SLIDER_DESIGN_OBJECT_GET_PROPERTY) {
                    var slider = $designObjectElement.data("controllers.slider");
                    return manager.returnValue(true, slider.value);
                }
                else
                    return manager.returnValue(true, designObject.value);
            }
            else if (propertyName == "text") {
                if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_GET_PROPERTY)
                    return manager.returnValue(true, $designObjectElement.val());
                else
                    return manager.returnValue(true, designObject.text);
            }
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "checked") {
                return manager.returnValue(true, $designObjectElement.attr("checked") != undefined);
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObjectElement = $designObjectElement[0];
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    value = result.value;

                    if (propertyName == "locationX")
                        $designObjectElement.css("left", value + "px");
                    else if (propertyName == "locationY")
                        $designObjectElement.css("top", value + "px");
                    else if (propertyName == "width") {
                        $designObjectElement.css("width", value + "px");
                        $designObjectElement.attr("width", value);

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");

                        //redraw
                        var polygon = $designObjectElement.data("controllers.polygon");                       
                        polygon.initialize();
                        polygon.refresh();
                    }
                    else if (propertyName == "height") {
                        $designObjectElement.css("height", value + "px");
                        $designObjectElement.attr("height", value);

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");

                        //redraw
                        var polygon = $designObjectElement.data("controllers.polygon");
                        polygon.initialize();
                        polygon.refresh();
                    }
                    else if (propertyName == "rotation") {
                        designObject.rotation = value;
                        DesignObjectHelper.applyRotation($designObjectElement, designObject);
                    }
                    else if (propertyName == "isDroppable") {
                        designObject.isDroppable = value;

                        if (value)
                            player.enableDesignObjectAsDroppable(id);
                        else
                            player.disableDesignObjectAsDroppable(id);
                    }
                    else if (propertyName == "isDraggable") {
                        designObject.isDraggable = value;

                        if (value)
                            player.enableDesignObjectAsDraggable(id);
                        else
                            player.disableDesignObjectAsDraggable(id);
                    }
                    else if (propertyName == "visible") {
                        designObject.visible = value;
                        if (value)
                            $designObjectElement.css("display", "block");
                        else
                            $designObjectElement.css("display", "none");
                    }
                    else if (propertyName == "enabled") {
                        designObject.enabled = value;

                        if (value)
                            $designObjectElement.removeAttr("disabled");
                        else
                            $designObjectElement.attr("disabled", "disabled");
                    }
                    else if (propertyName == "alpha") {
                        if (value < 0)
                            value = 0;
                        if (value > 100)
                            value = 100;
                        designObject.alpha = value;
                        value = parseFloat(value / 100);
                        $designObjectElement.css("opacity", value);
                    }
                    else if (propertyName == "className")
                        $designObjectElement.attr("class", value);
                    else if (propertyName == "tag")
                        designObject.tag = value;
                    else if (propertyName == "text") {
                        designObject.text = value;
                        if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_SET_PROPERTY) {
                            $designObjectElement.val(value);
                        } else {
                            $designObjectElement.html(value);
                        }
                    } else if (propertyName == "value") {
                        $designObjectElement.html(value);
                        designObject.value = value;
                    } else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                        if (!value)
                            $designObjectElement.css("cursor", "default");
                        else
                            $designObjectElement.css("cursor", "pointer");

                        designObject.useHandCursor = value;
                    } else if (propertyName == "checked") {
                        if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_SET_PROPERTY) {
                            designObject.checked = value;

                            if (value)
                                $designObjectElement.attr("checked", "checked");
                            else
                                designOBjectElement.removeAttr("checked");
                        }
                    }
                }
            }
        } else if (block.type == BlockType.POLYGON_DESIGN_OBJECT_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional BLOCK OF CODE for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        } 

        return manager.returnValue(false);
    }

    var onParallaxScrollTick = function (designObjectElementId) {
        var designObjectSelector = $("#" + designObjectElementId);
        var designObject = designObjectSelector.data("designObject");

        var divPartLeft = designObjectSelector.find("#partLeft");
        var divPartCenter = designObjectSelector.find("#partCenter");
        var divPartRight = designObjectSelector.find("#partRight");

        var scrollPositionX = designObjectSelector.data("scrollPositionX");

        if (designObject.scrollDirection == "left") {
            scrollPositionX -= designObject.scrollStep;
            if (scrollPositionX < -designObject.imageWidth)
                scrollPositionX = 0;
        } else if (designObject.scrollDirection == "right") {
            scrollPositionX += designObject.scrollStep;
            if (scrollPositionX > designObject.imageWidth)
                scrollPositionX = 0;
        }

        divPartLeft.css("left", (scrollPositionX - designObject.imageWidth) + "px");
        divPartCenter.css("left", scrollPositionX + "px");
        divPartRight.css("left", (scrollPositionX + designObject.imageWidth) + "px");

        designObjectSelector.data("scrollPositionX", scrollPositionX);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_PLAY);
    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_STOP);
    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_SPEED);
    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_DIRECTION);
    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_STEP);
    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_SET_PROPERTY);
    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_GET_PROPERTY);
    this.blockTypes.push(BlockType.SMART_DESIGN_OBJECTS_PARALLAX_SCROLL_ON_MOUSE_EVENT);

    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_SET_EDGE_COUNT);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_GET_EDGE_COUNT);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_SET_STROKE_THICKNESS);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_GET_STROKE_THICKNESS);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_SET_STROKE_COLOR);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_GET_STROKE_COLOR);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_SET_FILL_COLOR);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_GET_FILL_COLOR);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_SET_START_ANGLE);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_GET_START_ANGLE);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.POLYGON_DESIGN_OBJECT_ON_MOUSE_EVENT);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function BuiltinBlocksController(manager, player, playerData) {
    this.name = "Builtin";

    var BlockType = {
        MATH_VALUE: "mathValue",
        MATH_FLOAT_VALUE: "mathFloatValue",
        MATH_SUM: "mathSum",
        MATH_SUBTRACT: "mathSubtract",
        MATH_MULTIPLY: "mathMultiply",
        MATH_DIVIDE: "mathDivide",
        MATH_EQUALITY: "mathEquality",
        MATH_RANDOM: "mathRandom",
        MATH_POWER: "mathPower",
        MATH_MIN_MAX: "mathMinMax",
        MATH_ROUND: "mathRound",
        MATH_FIXED_DECIMAL_PLACES: "mathFixedDecimalPlaces",
        MATH_TO_NUMERIC: "mathToNumeric",
        MATH_ABSOLUTE: "mathAbsolute",
        MATH_ATAN2: "mathAtan2",
        MATH_ATAN: "mathAtan",
        MATH_ACOS: "mathAcos",
        MATH_ASIN: "mathAsin",
        MATH_CEIL: "mathCeil",
        MATH_COS: "mathCos",
        MATH_EXP: "mathExp",
        MATH_FLOOR: "mathFloor",
        MATH_LOG: "mathLog",
        MATH_SIN: "mathSin",
        MATH_SQRT: "mathSqrt",
        MATH_TAN: "mathTan",
        MATH_CONSTANT: "mathConstant",
        MATH_MINUS_ONE: "mathMinusOne",
        MATH_MINUMUM_IN_LIST: "mathMinumumInList",
        MATH_MAXIMUM_IN_LIST: "mathMaximumInList",
        MATH_MOD: "mathMod",
        MATH_IS_NAN: "mathIsNaN",
        MATH_PLUS_ONE: "mathPlusOne",

        TEXT_VALUE: "textValue",
        TEXT_COMPARE: "textCompare",
        TEXT_CONTAINS: "textContains",
        TEXT_TRIM: "textTrim",
        TEXT_JOIN: "textJoin",
        TEXT_INDEX_OF: "textIndexOf",
        TEXT_SEGMENT: "textSegment",
        TEXT_LENGTH: "textLength",
        TEXT_STARTS_AT: "textStartsAt",
        TEXT_TO_TEXT: "textToText",
        TEXT_CONCAT: "textConcat",
        TEXT_IS_EMPTY: "textIsEmpty",
        TEXT_SPLIT: "textSplit",

        FONT_ATTRIBUTES: "fontAttributes",
        FONT_SIZE: "fontSize",
        FONT_NAME: "fontName",

        LOGIC_VALUE: "logicValue",
        LOGIC_EQUALITY: "logicEquality",
        LOGIC_AND_OR: "logicAndOr",
        LOGIC_INVERSE: "logicInverse",

        ALERT: "alert",
        CONSOLE_INFO: "consoleInfo",
        CONSOLE_INFO_WITH_PREFIX: "consoleInfoWithPrefix",
        CONSOLE_CLEAR: "consoleClear",

        CONTROL_IF_THEN: "controlIfThen",
        CONTROL_IF_THEN_ELSE: "controlIfThenElse",
        CONTROL_IF_THEN_ELSE_RETURN: "controlIfThenElseReturn",
        CONTROL_WHILE: "controlWhile",
        CONTROL_DO_WHILE: "controlDoWhile",
        CONTROL_FOREACH: "controlForEach",
        CONTROL_SWITCH_CASE: "controlSwitchCase",
        CONTROL_BREAK: "controlBreak",
        CONTROL_CONTINUE: "controlContinue",

        ENABLE_USER_INTERACTION: "enableUserInteraction",
        DISABLE_USER_INTERACTION: "disableUserInteraction",

        ON_INPUT_KEY_EVENT: "onInputKeyEvent",
        CHARACTER_FROM_CHAR_CODE: "characterFromCharCode",
        ON_STAGE_MOUSE_EVENT: "onStageMouseEvent",

        IS_KEY_PRESSED: "isKeyPressed",
        OPEN_HTML_LINK: "openHtmlLink",

        CREATE_OBJECT: "createObject",
        GET_OBJECT_PROPERTY_VALUE: "getObjectPropertyValue",
        SET_OBJECT_PROPERTY_VALUE: "setObjectPropertyValue",
        COLOR_VALUE: "colorValue",

        VARIABLE_GET_VALUE: "variableGetValue",
        VARIABLE_SET_VALUE: "variableSetValue",
        VARIABLE_GET_PROPERTY_VALUE: "variableGetPropertyValue",
        VARIABLE_SET_PROPERTY_VALUE: "variableSetPropertyValue",
        VARIABLE_INITIALIZE_GLOBAL: "variableInitializeGlobal",
        VARIABLE_INITIALIZE_LOCAL: "variableInitializeLocal",

        PROCEDURE_CALL_FOR_RESULT: "procedureCallForResult",
        PROCEDURE_CALL: "procedureCall",
        PROCEDURE: "procedure",
        PROCEDURE_RETURN_RESULT: "procedureReturnResult",

        CALL_USER_FUNCTION: "callUserFunction",
        CALL_USER_FUNCTION_FOR_RESULT: "callUserFunctionForResult",
        ON_USER_EVENT: "onUserEvent",

        TIMELINE_PLAYER_CONTROL: "timelinePlayerControl",
        TIMELINE_PLAYER_CONTROL_GO_TO: "timelinePlayerControlGoTo",
        TIMELINE_PLAYER_CONTROL_GO_TO_SELECTED: "timelinePlayerControlGoToSelected",
        TIMELINE_SET_FRAME_PER_SECOND: "timelineSetFramePerSecond",
        TIMELINE_RESET: "timelineReset",
        ON_TIMELINE_EVENT: "onTimelineEvent",
        TIMELINE_GET_FRAME_INDEX: "timelineGetFrameIndex",
        TIMELINE_GET_STATE: "timelineGetState",
        ON_TIMELINE_FRAME_CHANGE_EVENT: "onTimelineFrameChangeEvent",
        ON_TIMELINE_STATE_CHANGE_EVENT: "onTimelineStateChangeEvent",

        LIST_CREATE: "listCreate",
        LIST_CREATE_FROM_COMMA_TEXT: "listCreateFromCommaText",
        LIST_LENGTH: "listLength",
        LIST_LENGTH_MINUS_ONE: "listLengthMinusOne",
        LIST_ADD_ITEM: "listAddItem",
        LIST_ADD_ITEM_INTO: "listAddItemInto",
        LIST_REMOVE_ITEM: "listRemoveItem",
        LIST_REMOVE_ITEM_AT: "listRemoveItemAt",
        LIST_GET_ITEM_AT: "listGetItemAt",
        LIST_CONTAINS: "listContains",
        LIST_INDEX_OF: "listIndexOf",
        LIST_SET_ITEM_AT: "listSetItemAt",
        LIST_SHUFFLE: "listShuffle",

        GET_DEPTH: "getDepth",
        SET_DEPTH: "setDepth",

        GET_PROPERTY: "getProperty",
        SET_PROPERTY: "setProperty",
        GET_REFERENCE: "getReference",
        GET_REFERENCE_PROPERTY: "getReferenceProperty",

        GET_ATTRIBUTE: "getAttribute",
        SET_ATTRIBUTE: "setAttribute"
    };

    var keyStates = new Array(256);
    var lists = new Array();
    var procedures = new Array();

    this.preInitialize = function () {
    }

    this.initialize = function () {
        initializeEvents();
        initializeProcedures();

        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.VARIABLE_INITIALIZE_GLOBAL) {
                            var variable = {};

                            // variable name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("name");
                                if (blockInputItem != null)
                                    variable.name = blockInputItem.value;
                            }

                            // variable value
                            var blockValue = block.getInput("default").block;
                            if (blockValue != null) {
                                var result = manager.executeBlock(blockValue, manager.createVariables(), manager.createVariables(), false, manager.createFlowState());
                                if (result != null && result.hasReturnValue)
                                    variable.value = result.value;
                            }

                            manager.variables.push(variable);
                        }
                    }
                }
            }
        }
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.ON_INPUT_KEY_EVENT ||
                            block.type == BlockType.ON_STAGE_MOUSE_EVENT) {

                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                            else if (block.type == BlockType.ON_INPUT_KEY_EVENT) {
                                $(document).on(eventName, { "block": block }, onKeyAction);
                            } else if (block.type == BlockType.ON_STAGE_MOUSE_EVENT) {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "") {
                                    var containerDiv = $("#vfabrika-container");
                                    $(containerDiv).on(eventName_, { "block": block }, onStageMouseEvent);
                                }
                            }
                        } else if (block.type == BlockType.ON_TIMELINE_EVENT) {
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;

                                if (eventName == "onInitialized")
                                    $(player).on(eventName, { "block": block }, onTimelineEvent);
                                else if (eventName == "onFrameChange")
                                    $(player).on("frameChange", { "block": block }, onTimelineFrameChangeEvent);
                                else if (eventName == "onStateChange")
                                    $(player).on("stateChange", { "block": block }, onTimelineStateChangeEvent);
                            }
                        }
                        else if (block.type == BlockType.ON_TIMELINE_FRAME_CHANGE_EVENT) {
                            $(player).on("frameChange", { "block": block }, onTimelineFrameChangeEvent);
                        }
                        //else if (block.type == BlockType.ON_TIMELINE_STATE_CHANGE_EVENT) {
                        //    $(player).on("stateChange", { "block": block }, onTimelineStateChangeEvent);
                        //}
                        else if (block.type == BlockType.ON_USER_EVENT) {
                            $(player).on("userInvokeFunction", { "block": block }, onUserInvokeFunctionEvent);
                        }
                    }
                }
            }
        }
    }

    var initializeProcedures = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.PROCEDURE) {
                            var defaultInput = block.getInput("default");

                            var procedure = {};

                            // name
                            procedure.name = defaultInput.getItem("name").value;

                            // parameters
                            procedure.parameters = [];

                            if (block.mutatorItems != null) {
                                for (var i = 0; i < block.mutatorItems.length; i++) {
                                    var mutatorItem = block.mutatorItems[i];
                                    var inputItem = getMutatorInputItemByMutatorItemUniqueId(defaultInput, mutatorItem.uniqueId, "input");
                                    if (inputItem != null) {
                                        procedure.parameters.push({ name: inputItem.value, mutatorItemUniqueId: mutatorItem.uniqueId });
                                    }
                                }
                            }

                            // flowBlock
                            var inputBlock = block.getInput("block");
                            procedure.flowBlock = inputBlock.flowBlock;

                            procedures.push(procedure);
                        }
                    }
                }
            }
        }
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onTimelineEvent = function (e) {
        var block = e.data.block;

        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onTimelineFrameChangeEvent = function (e) {
        var eventVariables = manager.createVariables();
        eventVariables.add("frameIndex", player.frameIndex);

        var block = e.data.block;
        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onTimelineStateChangeEvent = function (e) {
        var eventVariables = manager.createVariables();
        eventVariables.add("timelineState", player.isPlaying);

        var block = e.data.block;
        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onUserInvokeFunctionEvent = function (e, eventName, parameters) {
        var eventVariables = manager.createVariables();
        var userEventName = e.data.block.getInput("default").getItem("name").value;

        eventVariables.add("parameters", parameters)

        if (userEventName == eventName) {
            var block = e.data.block;
            manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
        }
    }

    var initializeInputs = function () {
        for (var i = 0; i < 255; i++) {
            keyStates[i] = false;
        }

        $(document).on("keydown", onInputKeyDown);
        $(document).on("keyup", onInputKeyUp);
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.MATH_VALUE) {
            var inputValue = block.getInput("default");
            var item = inputValue.getItem("value");
            return manager.returnValue(true, parseInt(item.value));
        }
        else if (block.type == BlockType.MATH_FLOAT_VALUE) {
            var inputValue = block.getInput("default");
            var item = inputValue.getItem("value");
            return manager.returnValue(true, parseFloat(item.value));
        }
        else if (block.type == BlockType.MATH_SUM) {
            var inputValue = block.getInput("value");

            var values = new Array();

            if (block.mutatorItems != null) {
                for (var i = 0; i < block.mutatorItems.length; i++) {
                    var mutatorItem = block.mutatorItems[i];

                    for (var j = 0; j < inputValue.items.length; j++) {
                        var inputItem = inputValue.items[j];

                        if (inputItem.mutatorItemUniqueId == mutatorItem.uniqueId) {
                            var value = 0;

                            if (inputItem.block != null) {
                                var result = manager.executeBlock(inputItem.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue)
                                    values.push(result.value);
                            }
                        }
                    }
                }
            }

            var totalValue = 0;

            for (var i = 0; i < values.length; i++)
                totalValue += values[i];

            return manager.returnValue(true, totalValue);
        }
        else if (block.type == BlockType.MATH_SUBTRACT) {
            var inputValue = block.getInput("value");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            return manager.returnValue(true, valueA - valueB);
        }
        else if (block.type == BlockType.MATH_MULTIPLY) {
            var inputValue = block.getInput("value");

            var values = new Array();

            if (block.mutatorItems != null) {
                for (var i = 0; i < block.mutatorItems.length; i++) {
                    var mutatorItem = block.mutatorItems[i];

                    for (var j = 0; j < inputValue.items.length; j++) {
                        var inputItem = inputValue.items[j];

                        if (inputItem.mutatorItemUniqueId == mutatorItem.uniqueId) {
                            var value = 0;

                            if (inputItem.block != null) {
                                var result = manager.executeBlock(inputItem.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue)
                                    values.push(result.value);
                            }
                        }
                    }
                }
            }

            var totalValue = NaN;

            if (values.length > 0) {
                totalValue = values[0];
                for (var i = 1; i < values.length; i++)
                    totalValue *= values[i];
            }

            return manager.returnValue(true, totalValue);
        }
        // math_divide
        else if (block.type == BlockType.MATH_DIVIDE) {
            var inputValue = block.getInput("value");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            return manager.returnValue(true, valueA / valueB);
        }
        // math_equality
        else if (block.type == BlockType.MATH_EQUALITY) {
            var inputValue = block.getInput("default");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            var criteria = inputValue.getItem("criteria").value;

            if (criteria == "equal")
                return manager.returnValue(true, valueA == valueB);
            else if (criteria == "notEqual")
                return manager.returnValue(true, valueA != valueB);
            else if (criteria == "lesser")
                return manager.returnValue(true, valueA < valueB);
            else if (criteria == "lesserOrEqual")
                return manager.returnValue(true, valueA <= valueB);
            else if (criteria == "greater")
                return manager.returnValue(true, valueA > valueB);
            else if (criteria == "greaterOrEqual")
                return manager.returnValue(true, valueA >= valueB);
        }
        else if (block.type == BlockType.MATH_TO_NUMERIC) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, parseInt(value));
        }
        else if (block.type == BlockType.MATH_ABSOLUTE) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }
            return manager.returnValue(true, Math.abs(value));
        }
        else if (block.type == BlockType.MATH_ATAN2) {
            var inputValue = block.getInput("value");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }
            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            return manager.returnValue(true, Math.atan2(valueA, valueB));
        }
        else if (block.type == BlockType.MATH_ATAN) {
            var inputValue = block.getInput("value");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            return manager.returnValue(true, Math.atan(valueA));
        }
        else if (block.type == BlockType.MATH_ACOS) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.acos(value));
        }
        else if (block.type == BlockType.MATH_ASIN) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.asin(value));
        }
        else if (block.type == BlockType.MATH_CEIL) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.ceil(value));
        }
        else if (block.type == BlockType.MATH_COS) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.cos(value));
        }
        else if (block.type == BlockType.MATH_EXP) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.exp(value));
        }
        else if (block.type == BlockType.MATH_FLOOR) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.floor(value));
        }
        else if (block.type == BlockType.MATH_LOG) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.log(value));
        }
        else if (block.type == BlockType.MATH_SIN) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.sin(value));
        }
        else if (block.type == BlockType.MATH_SQRT) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.sqrt(value));
        }
        else if (block.type == BlockType.MATH_TAN) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.tan(value));
        }
        else if (block.type == BlockType.MATH_CONSTANT) {
            var inputDefault = block.getInput("default");

            var constantName = inputDefault.getItem("constantName").value;
            if (constantName == "e")
                return manager.returnValue(true, Math.E);
            else if (constantName == "pi")
                return manager.returnValue(true, Math.PI);
            else if (constantName == "sqrt_2")
                return manager.returnValue(true, Math.SQRT2);
            else if (constantName == "sqrt_1/2")
                return manager.returnValue(true, Math.SQRT1_2);
            else if (constantName == "ln2")
                return manager.returnValue(true, Math.LN2);
            else if (constantName == "ln10")
                return manager.returnValue(true, Math.LN10);
            else if (constantName == "log_2e")
                return manager.returnValue(true, Math.LOG2E);
            else if (constantName == "log_10e")
                return manager.returnValue(true, Math.LOG10E);
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.MATH_MINUS_ONE) {
            var inputDefault = block.getInput("default");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    return manager.returnValue(true, result.value - 1);
                else
                    return manager.returnValue(true, null);
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.MATH_MINUMUM_IN_LIST) {
            var inputDefault = block.getInput("default");

            var value = [];
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.min.apply(Math, value));
        }
        else if (block.type == BlockType.MATH_MAXIMUM_IN_LIST) {
            var inputDefault = block.getInput("default");

            var value = [];
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.max.apply(Math, value));
        }
        else if (block.type == BlockType.MATH_MOD) {
            var inputDefault = block.getInput("default");

            var itemContainer = inputDefault.getItem("container");
            var modConstant = 0;
            if (itemContainer.block != null) {
                var result = manager.executeBlock(itemContainer.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    modConstant = result.value;
            }

            var value = 0;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, (value % modConstant));
        }
        else if (block.type == BlockType.MATH_IS_NAN) {
            var inputDefault = block.getInput("default");

            var value = NaN;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }
            return manager.returnValue(true, isNaN(value));
        }
        else if (block.type == BlockType.MATH_PLUS_ONE) {
            var inputDefault = block.getInput("default");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    return manager.returnValue(true, result.value + 1);
                else
                    return manager.returnValue(true, null);
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.LOGIC_EQUALITY) {
            var inputValue = block.getInput("default");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            var criteria = inputValue.getItem("criteria").value;

            if (criteria == "equal")
                return manager.returnValue(true, valueA == valueB);
            else if (criteria == "notEqual")
                return manager.returnValue(true, valueA != valueB);
        }
        else if (block.type == BlockType.LOGIC_AND_OR) {
            var inputValue = block.getInput("default");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = false;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = false;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            var criteria = inputValue.getItem("criteria").value;

            if (criteria == "and")
                return manager.returnValue(true, valueA && valueB);
            else if (criteria == "or")
                return manager.returnValue(true, valueA || valueB);
        }
        else if (block.type == BlockType.LOGIC_INVERSE) {
            var inputValue = block.getInput("default");
            if (inputValue.block != null) {
                var result = manager.executeBlock(inputValue.block, eventVariables, scopeVariables, flow, flowState);
                return manager.returnValue(true, !result.value);
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.MATH_RANDOM) {
            var inputValue = block.getInput("value");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            return manager.returnValue(true, valueA + (Math.random() * (valueB - valueA)));
        }
        // math_power
        else if (block.type == BlockType.MATH_POWER) {
            var inputValue = block.getInput("default");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            return manager.returnValue(true, Math.pow(valueA, valueB));
        }
        // math_min
        else if (block.type == BlockType.MATH_MIN_MAX) {
            var inputValueA = block.getInput("valueA");
            var valueA = 0;
            if (inputValueA.block != null) {
                var result = manager.executeBlock(inputValueA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var inputValueB = block.getInput("valueB");
            var valueB = 0;
            if (inputValueB.block != null) {
                var result = manager.executeBlock(inputValueB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            var inputItemCommand = inputValueA.getItem("criteria");
            var command = inputItemCommand.value;

            if (command == "minimum") {
                if (valueA < valueB)
                    return manager.returnValue(true, valueA);
                else
                    return manager.returnValue(true, valueB);
            } else if (command == "maximum") {
                if (valueA > valueB)
                    return manager.returnValue(true, valueA);
                else
                    return manager.returnValue(true, valueB);
            }
            else
                return manager.returnValue(false);
        }
        else if (block.type == BlockType.MATH_ROUND) {
            var inputDefault = block.getInput("default");
            var value = 0;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, Math.round(value));
        }
        else if (block.type == BlockType.MATH_FIXED_DECIMAL_PLACES) {
            var inputDefault = block.getInput("default");

            var value = 0;

            var inputItemValue = inputDefault.getItem("value");
            if (inputItemValue.block != null) {
                var result = manager.executeBlock(inputItemValue.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            var fixedBy = 0;

            var inputItemFixedBy = inputDefault.getItem("fixedBy");
            if (inputItemFixedBy.block != null) {
                var result = manager.executeBlock(inputItemFixedBy.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    fixedBy = result.value;
            }

            return manager.returnValue(true, value.toFixed(fixedBy));
        }
        else if (block.type == BlockType.LOGIC_VALUE) {
            var inputValue = block.getInput("default");
            var item = inputValue.getItem("value");
            var value = item.value.toString();
            return manager.returnValue(true, value.toLowerCase() == "true");
        }
        else if (block.type == BlockType.TEXT_VALUE) {
            var inputValue = block.getInput("default");
            var item = inputValue.getItem("value");
            return manager.returnValue(true, item.value);
        }
        else if (block.type == BlockType.ALERT) {
            var inputDefault = block.getInput("default");
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    alert(result.value);
            }
        }
        else if (block.type == BlockType.CONSOLE_INFO) {
            if (!manager.omitConsoleMessages) {
                var inputDefault = block.getInput("default");
                if (inputDefault.block != null) {
                    var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                    if (result != null && result.hasReturnValue)
                        console.info(result.value);
                }
            }
        }
        else if (block.type == BlockType.CONSOLE_INFO_WITH_PREFIX) {
            if (!manager.omitConsoleMessages) {
                var inputDefault = block.getInput("default");

                var prefixInputItem = inputDefault.getItem("prefix");
                var value = "";
                if (prefixInputItem.block != null) {
                    var result = manager.executeBlock(prefixInputItem.block, eventVariables, scopeVariables, flow, flowState);
                    if (result != null && result.hasReturnValue)
                        value = result.value;
                }
                var prefixText = value;

                var messageInputItem = inputDefault.getItem("value");
                var value = "";
                if (messageInputItem.block != null) {
                    var result = manager.executeBlock(messageInputItem.block, eventVariables, scopeVariables, flow, flowState);
                    if (result != null && result.hasReturnValue)
                        value = result.value;
                }
                var messageText = value;

                console.info(prefixText + " : %o", messageText)
            }
        }
        else if (block.type == BlockType.CONSOLE_CLEAR) {
            console.clear();
        }
        else if (block.type == BlockType.TEXT_TO_TEXT) {
            var inputDefault = block.getInput("default");

            var value = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, value.toString());
        }
        // math_random
        else if (block.type == BlockType.TIMELINE_PLAYER_CONTROL) {
            var inputDefault = block.getInput("default");
            var inputItemDefault = inputDefault.getItem("command");

            if (inputItemDefault.value == "play") {
                player.play();
            } else if (inputItemDefault.value == "stop") {
                // for initialization cycle only
                player.timelineStoppedByEvent = true;

                player.stop();
            }
        }
        // timeline_player_control_go_to
        else if (block.type == BlockType.TIMELINE_PLAYER_CONTROL_GO_TO) {
            var inputDefault = block.getInput("default");

            var frameIndex = 0;

            var inputItemFrameIndex = inputDefault.getItem("frameIndex");
            var result = manager.executeBlock(inputItemFrameIndex.block, eventVariables, scopeVariables, flow, flowState);
            if (result != null && result.hasReturnValue)
                if (result != null && result.hasReturnValue)
                    frameIndex = result.value;

            var inputItemCommand = inputDefault.getItem("command");
            if (inputItemCommand.value == "play") {
                player.gotoAndPlay(frameIndex);
            } else if (inputItemCommand.value == "stop") {
                // for initialization cycle only
                player.timelineStoppedByEvent = true;

                player.gotoAndStop(frameIndex);
            }
        }
        else if (block.type == BlockType.TIMELINE_PLAYER_CONTROL_GO_TO_SELECTED) {
            var inputDefault = block.getInput("default");

            var inputItemFrameIndex = inputDefault.getItem("frameIndex");
            var value = 0;
            if (inputItemFrameIndex.block != null) {
                var result = manager.executeBlock(inputItemFrameIndex.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            var frameIndex = parseInt(value);

            var inputItemCommand = inputDefault.getItem("command");
            if (inputItemCommand.value == "play") {
                player.gotoAndPlay(frameIndex);
            } else if (inputItemCommand.value == "stop") {
                player.gotoAndStop(frameIndex);
            }
        }
        else if (block.type == BlockType.TIMELINE_SET_FRAME_PER_SECOND) {
            var inputDefault = block.getInput("default");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    var framePerSecond = result.value;
                    player.setFramePerSecond(framePerSecond);
                }
            }
        }
        else if (block.type == BlockType.TIMELINE_RESET) {
            player.reset();
        }
        else if (block.type == BlockType.ON_TIMELINE_EVENT) {
            var inputDefault = block.getInput("default");

            var eventName = inputDefault.getItem("eventName").value
            if (eventName == "onInitialized") {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, flow, flowState);
            }
            else if (eventName == "onFrameChange") {
                var frameIndexObject = eventVariables.getValue("frameIndex");

                var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
                scopeVariables_.push(manager.createVariable("frameIndex", frameIndexObject));

                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, flow, flowState);
            } else if (eventName == "onStateChange") {
                var timelineState = eventVariables.getValue("timelineState");

                var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
                scopeVariables_.push(manager.createVariable("timelineState", timelineState));

                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, flow, flowState);
            }
        }
        else if (block.type == BlockType.ON_TIMELINE_FRAME_CHANGE_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            var frameIndexObject = eventVariables.getValue("frameIndex");
            scopeVariables_.push(manager.createVariable("frameIndex", frameIndexObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, flow, flowState);
        }
        //else if (block.type == BlockType.ON_TIMELINE_STATE_CHANGE_EVENT) {
        //    var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

        //    var timelineState = eventVariables.getValue("timelineState");

        //    scopeVariables_.push(manager.createVariable("timelineState", timelineState));

        //    var inputBlock = block.getInput("block");
        //    if (inputBlock.flowBlock != null)
        //        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, flow, flowState);
        //}
        else if (block.type == BlockType.TIMELINE_GET_FRAME_INDEX) {
            return manager.returnValue(true, player.frameIndex);
        } else if (block.type == BlockType.TIMELINE_GET_STATE) {
            return manager.returnValue(true, player.isPlaying);
        }
        else if (block.type == BlockType.TEXT_COMPARE) {
            var inputValue = block.getInput("default");

            var itemContainerA = inputValue.getItem("containerA");
            var valueA = 0;
            if (itemContainerA.block != null) {
                var result = manager.executeBlock(itemContainerA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueA = result.value;
            }

            var itemContainerB = inputValue.getItem("containerB");
            var valueB = 0;
            if (itemContainerB.block != null) {
                var result = manager.executeBlock(itemContainerB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    valueB = result.value;
            }

            var criteria = inputValue.getItem("criteria").value;

            if (criteria == "equal")
                return manager.returnValue(true, valueA == valueB);
            else if (criteria == "notEqual")
                return manager.returnValue(true, valueA != valueB);
        }
        // text_contains
        else if (block.type == BlockType.TEXT_CONTAINS) {
            var inputTextA = block.getInput("textA");
            var textA = "";
            if (inputTextA.block != null) {
                var result = manager.executeBlock(inputTextA.block, eventVariables, scopeVariables, flow, flowState);
                textA = result.value;
            }

            var inputTextB = block.getInput("textB");
            var textB = "";
            if (inputTextB.block != null) {
                var result = manager.executeBlock(inputTextB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textB = result.value;
            }

            return manager.returnValue(true, textA.indexOf(textB) != -1);
        }
        else if (block.type == "text_is_empty") {
            var inputDefault = block.getInput("default");
            var text = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    text = result.value;
            }

            return manager.returnValue(true, text == "");
        }
        else if (block.type == BlockType.TEXT_TRIM) {
            var inputDefault = block.getInput("default");
            var text = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    text = result.value;
            }

            return manager.returnValue(true, text.trim());
        }
        else if (block.type == BlockType.TEXT_JOIN) {
            var inputTextA = block.getInput("textA");

            var joinedText = "";

            if (block.mutatorItems != null) {
                for (var i = 0; i < block.mutatorItems.length; i++) {
                    var mutatorItem = block.mutatorItems[i];

                    for (var j = 0; j < block.inputs.length; j++) {
                        var input = block.inputs[j];

                        if (input.mutatorItemUniqueId == mutatorItem.uniqueId) {
                            var value = 0;

                            if (input.block != null) {
                                var result = manager.executeBlock(input.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue)
                                    joinedText += result.value;
                            }
                        }
                    }
                }
            }

            return manager.returnValue(true, joinedText);
        }
        else if (block.type == BlockType.TEXT_SPLIT) {

            var inputTextA = block.getInput("textA");
            var textA = "";
            if (inputTextA.block != null) {
                var result = manager.executeBlock(inputTextA.block, eventVariables, scopeVariables, flow, flowState);
                textA = result.value;
            }

            var inputTextB = block.getInput("textB");
            var textB = "";
            if (inputTextB.block != null) {
                var result = manager.executeBlock(inputTextB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textB = result.value;
            }

            return manager.returnValue(true, textA.split(textB));
        }
        else if (block.type == BlockType.TEXT_INDEX_OF) {
            var inputTextA = block.getInput("textA");
            var textA = "";
            if (inputTextA.block != null) {
                var result = manager.executeBlock(inputTextA.block, eventVariables, scopeVariables, flow, flowState);
                textA = result.value;
            }

            var inputTextB = block.getInput("textB");
            var textB = "";
            if (inputTextB.block != null) {
                var result = manager.executeBlock(inputTextB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textB = result.value;
            }

            return manager.returnValue(true, textA.indexOf(textB));
        }
        else if (block.type == BlockType.TEXT_CONCAT) {
            var inputValue = block.getInput("value");

            var itemTextA = inputValue.getItem("textA");
            var textA = "";
            if (itemTextA.block != null) {
                var result = manager.executeBlock(itemTextA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textA = result.value;
            }

            var itemTextB = inputValue.getItem("textB");
            var textB = "";
            if (itemTextB.block != null) {
                var result = manager.executeBlock(itemTextB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textB = result.value;
            }

            return manager.returnValue(true, textA + textB);
        }
        else if (block.type == BlockType.TEXT_IS_EMPTY) {
            var inputDefault = block.getInput("default");

            var result_ = true;

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    result_ = result.value == "";
            }

            return manager.returnValue(true, result_);
        }
        else if (block.type == BlockType.TEXT_LENGTH) {
            var inputDefault = block.getInput("default");
            var text = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    text = result.value;
            }

            return manager.returnValue(true, text.length);
        }
        else if (block.type == BlockType.TEXT_REPLACE_ALL) {
            var inputTextA = block.getInput("textA");
            var textA = "";
            if (inputTextA.block != null) {
                var result = manager.executeBlock(inputTextA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textA = result.value;
            }

            var inputTextB = block.getInput("textB");
            var textB = "";
            if (inputTextB.block != null) {
                var result = manager.executeBlock(inputTextB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textB = result.value;
            }

            var inputTextC = block.getInput("textC");
            var textC = "";
            if (inputTextC.block != null) {
                var result = manager.executeBlock(inputTextC.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textC = result.value;
            }

            return manager.returnValue(true, textA.replace(textB, textC));
        }
        else if (block.type == BlockType.TEXT_SEGMENT) {
            var inputText = block.getInput("text");
            var text = "";
            if (inputText.block != null) {
                var result = manager.executeBlock(inputText.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    text = result.value;
            }

            var inputIndex = block.getInput("index");
            var index = 0;
            if (inputIndex.block != null) {
                var result = manager.executeBlock(inputIndex.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textB = result.value;
            }

            var inputCount = block.getInput("count");
            var count = 0;
            if (inputCount.block != null) {
                var result = manager.executeBlock(inputCount.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    count = result.value;
            }

            return manager.returnValue(true, text.substr(index, count));
        }
        else if (block.type == BlockType.TEXT_STARTS_AT) {
            var inputTextA = block.getInput("textA");
            var textA = "";
            if (inputTextA.block != null) {
                var result = manager.executeBlock(inputTextA.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textA = result.value;
            }

            var inputTextB = block.getInput("textB");
            var textB = "";
            if (inputTextB.block != null) {
                var result = manager.executeBlock(inputTextB.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    textB = result.value;
            }

            return manager.returnValue(true, textA.indexOf(textB));
        }
        else if (block.type == BlockType.FONT_ATTRIBUTES) {
            var inputDefault = block.getInput("default");
            var bold = inputDefault.getItem("bold").value;
            var italic = inputDefault.getItem("italic").value;
            //this lines are not supported by canvas html5.
            //var underline = inputDefault.getItem("underline").value;
            //var stroke = inputDefault.getItem("stroke").value;

            return manager.returnValue(true, {
                "bold": bold,
                //"underline" :underline,
                //"stroke" :stroke,
                "italic": italic
            });
        }
        else if (block.type == BlockType.FONT_SIZE) {
            var inputDefault = block.getInput("default");
            var fontSize = inputDefault.getItem("fontSize").value

            return manager.returnValue(true, fontSize);
        }
        else if (block.type == BlockType.FONT_NAME) {
            var inputDefault = block.getInput("default");
            var fontName = inputDefault.getItem("fontName").value

            return manager.returnValue(true, fontName);
        }
        else if (block.type == BlockType.CONTROL_IF_THEN) {
            var inputIf = block.getInput("if");
            if (inputIf.block != null) {
                var result = manager.executeBlock(inputIf.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    var valueIf = result.value;
                    if (valueIf) {
                        var inputThen = block.getInput("then");
                        if (inputThen.flowBlock != null)
                            manager.executeBlock(inputThen.flowBlock, eventVariables, scopeVariables, flow, flowState);
                    }
                    else {
                        if (block.mutatorItems != null) {
                            for (var i = 0; i < block.mutatorItems.length; i++) {
                                var mutatorItem = block.mutatorItems[i];
                                if (mutatorItem.name == "elseIf") {
                                    var inputIf = getMutatorInputByMutatorItemUniqueId(block, mutatorItem.uniqueId, "elseIf");
                                    if (inputIf != null) {
                                        var result = manager.executeBlock(inputIf.block, eventVariables, scopeVariables, flow, flowState);
                                        if (result != null && result.hasReturnValue) {
                                            if (result.value) {
                                                var inputThen = getMutatorInputByMutatorItemUniqueId(block, mutatorItem.uniqueId, "then");
                                                if (inputThen != null) {
                                                    if (inputThen.flowBlock != null)
                                                        manager.executeBlock(inputThen.flowBlock, eventVariables, scopeVariables, flow, flowState);

                                                    conditionValidated = true;
                                                    break;
                                                }
                                            }
                                        }

                                    }
                                }
                                else if (mutatorItem.name == "else") {
                                    var inputElse = getMutatorInputByMutatorItemUniqueId(block, mutatorItem.uniqueId, "else");
                                    if (inputElse != null && inputElse.flowBlock != null)
                                        manager.executeBlock(inputElse.flowBlock, eventVariables, scopeVariables, flow, flowState);

                                    conditionValidated = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (block.type == BlockType.CONTROL_IF_THEN_ELSE) {
            var inputIf = block.getInput("if");
            if (inputIf.block != null) {
                var result = manager.executeBlock(inputIf.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    var valueIf = result.value;
                    if (valueIf) {
                        var inputThen = block.getInput("then");
                        if (inputThen.flowBlock != null)
                            manager.executeBlock(inputThen.flowBlock, eventVariables, scopeVariables, flow, flowState);
                    } else {
                        var inputElse = block.getInput("else");
                        if (inputElse.flowBlock != null)
                            manager.executeBlock(inputElse.flowBlock, eventVariables, scopeVariables, flow, flowState);
                    }
                }
            }
        }
        else if (block.type == BlockType.CONTROL_IF_THEN_ELSE_RETURN) {
            var inputIf = block.getInput("if");
            if (inputIf.block != null) {
                var result = manager.executeBlock(inputIf.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    var valueIf = result.value;
                    if (valueIf) {
                        var inputThen = block.getInput("then");
                        if (inputThen.block != null) {
                            var result = manager.executeBlock(inputThen.block, eventVariables, scopeVariables, flow, flowState);
                            if (result != null && result.hasReturnValue)
                                return manager.returnValue(true, result.value);
                        } else {
                            return manager.returnValue(true, null);
                        }
                    } else {
                        var inputElse = block.getInput("else");
                        if (inputElse.block != null) {
                            var result = manager.executeBlock(inputElse.block, eventVariables, scopeVariables, flow, flowState);
                            if (result != null && result.hasReturnValue)
                                return manager.returnValue(true, result.value);
                        } else
                            return manager.returnValue(true, null);
                    }
                }
            }

            return manager.returnValue(false);
        }
        else if (block.type == BlockType.VARIABLE_GET_VALUE) {
            var variableName = block.getInput("default").getItem("name").value;

            for (var i = 0; i < manager.variables.length; i++) {
                var variable = manager.variables[i];
                if (variable.name == variableName)
                    return manager.returnValue(true, variable.value);
            }

            if (scopeVariables != null) {
                for (var i = 0; i < scopeVariables.length; i++) {
                    var scopeVariable = scopeVariables[i];
                    if (scopeVariable.name == variableName)
                        return manager.returnValue(true, scopeVariable.value);
                }
            }

            return manager.returnValue(false);
        }
        else if (block.type == BlockType.VARIABLE_SET_VALUE) {
            var variableName = block.getInput("default").getItem("name").value;

            var variableValue = null;

            var block_ = block.getInput("default").block;
            if (block_ != null) {
                var result = manager.executeBlock(block_, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    variableValue = result.value;
            }

            for (var i = 0; i < manager.variables.length; i++) {
                var variable = manager.variables[i];
                if (variable.name == variableName) {
                    variable.value = variableValue;
                    break;
                }
            }

            if (scopeVariables != null) {
                for (var i = 0; i < scopeVariables.length; i++) {
                    var scopeVariable = scopeVariables[i];
                    if (scopeVariable.name == variableName) {
                        scopeVariable.value = variableValue;
                        break;
                    }
                }
            }
        }
        else if (block.type == BlockType.VARIABLE_GET_PROPERTY_VALUE) {
            var variableName = block.getInput("default").getItem("variableName").value;
            var propertyName = block.getInput("default").getItem("propertyName").value;

            for (var i = 0; i < manager.variables.length; i++) {
                var variable = manager.variables[i];
                if (variable.name == variableName)
                    return manager.returnValue(true, manager.getObjectProperty(variable, propertyName));
            }

            if (scopeVariables != null) {
                for (var i = 0; i < scopeVariables.length; i++) {
                    var scopeVariable = scopeVariables[i];
                    if (scopeVariable.name == variableName)
                        return manager.returnValue(true, manager.getObjectProperty(scopeVariable, propertyName));
                }
            }

            var designObjectElement = $("#" + variableName);
            if (designObjectElement != null) {
                return manager.returnValue(true, manager.getObjectProperty({ value: designObjectElement[0] }, propertyName));
            }

            return manager.returnValue(false);
        }
        else if (block.type == BlockType.VARIABLE_SET_PROPERTY_VALUE) {
            var variableName = block.getInput("default").getItem("variableName").value;
            var propertyName = block.getInput("default").getItem("propertyName").value;

            var variableValue = null;

            var block_ = block.getInput("default").block;
            if (block_ != null) {
                var result = manager.executeBlock(block_, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    variableValue = result.value;
            }

            for (var i = 0; i < manager.variables.length; i++) {
                var variable = manager.variables[i];
                if (variable.name == variableName) {
                    manager.setObjectProperty(variable, propertyName, variableValue);
                    break;
                }
            }

            if (scopeVariables != null) {
                for (var i = 0; i < scopeVariables.length; i++) {
                    var scopeVariable = scopeVariables[i];
                    if (scopeVariable.name == variableName) {
                        manager.setObjectProperty(scopeVariable, propertyName, variableValue);
                        break;
                    }
                }
            }

            var designObjectElement = $("#" + variableName);
            if (designObjectElement != null) {
                manager.setObjectProperty({ value: designObjectElement[0] }, propertyName, variableValue);
            }
        }
        else if (block.type == BlockType.VARIABLE_INITIALIZE_LOCAL) {
            var inputDefault = block.getInput("default");
            var variableName = inputDefault.getItem("name").value;

            var variableValue = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    variableValue = result.value;
            }

            scopeVariables.push(manager.createVariable(variableName, variableValue));
        }
        else if (block.type == BlockType.GET_OBJECT_PROPERTY_VALUE) {
            var inputDefault = block.getInput("default");

            var obj = null;

            var inputItemObject = inputDefault.getItem("object");
            if (inputItemObject.block != null) {
                var result = manager.executeBlock(inputItemObject.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    obj = result.value;
            }

            if (obj != null) {
                var propertyName = "";
                var itemPropertyName = inputDefault.getItem("propertyName");
                if (itemPropertyName != null) {
                    var result = manager.executeBlock(itemPropertyName.block, eventVariables, scopeVariables, flow, flowState);
                    if (result != null && result.hasReturnValue)
                        propertyName = result.value;
                }

                if (propertyName != "")
                    return manager.returnValue(true, obj[propertyName]);
            }
        }
        else if (block.type == BlockType.SET_OBJECT_PROPERTY_VALUE) {
            var inputDefault = block.getInput("default");

            // get object
            var obj = null;
            var inputItemObject = inputDefault.getItem("object");
            if (inputItemObject.block != null) {
                var result = manager.executeBlock(inputItemObject.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    var obj = result.value;
                }
            }

            // get value
            var value = undefined;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            // get property name
            var propertyName = "";
            var itemPropertyName = inputDefault.getItem("propertyName");
            if (itemPropertyName != null) {
                var result = manager.executeBlock(itemPropertyName.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    propertyName = result.value;
            }

            // set object property value
            manager.setObjectProperty(obj, propertyName, value);
        }
        else if (block.type == BlockType.VARIABLE_SET_OBJECT_PROPERTY_VALUE) {
            // object
            var obj = null;

            var inputItemObject = block.getInput("default").getItem("object");
            if (inputItemObject.block != null) {
                var result = manager.executeBlock(inputItemObject.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    obj = result.value;
            }

            if (obj != null) {

                // propertyName
                var propertyName = block.getInput("default").getItem("propertyName").value;
                if (propertyName != "") {
                    var value = null;

                    // value
                    var inputItemValue = block.getInput("default").getItem("value");
                    if (inputItemValue.block != null) {
                        var result = manager.executeBlock(inputItemValue.block, eventVariables, scopeVariables, flow, flowState);
                        if (result != null && result.hasReturnValue)
                            value = result.value;
                    }


                    obj[propertyName] = value;
                }
            }
        }
        else if (block.type == BlockType.COLOR_VALUE) {
            var inputValue = block.getInput("default");
            var item = inputValue.getItem("value");
            return manager.returnValue(true, item.value);
        }
        else if (block.type == BlockType.CONTROL_WHILE) {
            var inputDefault = block.getInput("default");
            var inputBlock = block.getInput("block");

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    while (result.value) {
                        if (inputBlock.flowBlock != null)
                            manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, flow, flowState);

                        result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                    }
                }
            }
        }
        // control_do_while
        else if (block.type == BlockType.CONTROL_DO_WHILE) {
            var inputDefault = block.getInput("default");
            var inputBlock = block.getInput("block");

            if (inputDefault.block != null) {
                var result;
                do {
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, flow, flowState);

                    result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                } while (result != null && result.value)
            }
        }
        // control_foreach
        else if (block.type == BlockType.CONTROL_FOREACH) {
            var inputForEach = block.getInput("foreach");

            // variable name
            var variableName = inputForEach.getItem("variableName").value;

            // from value
            var fromValue = 0;
            if (inputForEach.block != null) {
                var result = manager.executeBlock(inputForEach.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    fromValue = result.value;
            }

            var inputTo = block.getInput("to");

            // to value
            var toValue = 0;
            if (inputTo.block != null) {
                var result = manager.executeBlock(inputTo.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    toValue = result.value;
            }

            var inputBy = block.getInput("by");

            // by value
            var byValue = 0;
            if (inputBy.block != null) {
                var result = manager.executeBlock(inputBy.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    byValue = result.value;
            }

            var inputBlock = block.getInput("block");

            if (byValue >= 0) {
                for (var i = fromValue; i <= toValue; i = i + byValue) {
                    var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                    // push variable into scope variables
                    var variable = {};
                    variable.name = variableName;
                    variable.value = i;
                    scopeVariables_.push(variable);

                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);

                    if (flowState.modifierType == "break") {
                        flowState.modifierType = null;
                        break;
                    }

                    if (flowState.modifierType == "continue") {
                        flowState.modifierType = null;
                        continue;
                    }

                    if (flowState.modifierType == "return")
                        break;
                }
            } else {
                for (var i = fromValue; i >= toValue; i = i + byValue) {
                    var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                    // push variable into scope variables
                    var variable = {};
                    variable.name = variableName;
                    variable.value = i;
                    scopeVariables_.push(variable);

                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);

                    if (flowState.modifierType == "break")
                        break;

                    if (flowState.modifierType == "continue")
                        continue;

                    if (flowState.modifierType == "return")
                        break;
                }
            }
        }
        else if (block.type == BlockType.CONTROL_SWITCH_CASE) {
            var defaultInput = block.getInput("default");

            var value = undefined;

            if (defaultInput.block != null) {
                var result = manager.executeBlock(defaultInput.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    value = result.value;

                    if (block.mutatorItems != null) {
                        var switchBroken = false;

                        for (var i = 0; i < block.mutatorItems.length; i++) {
                            var mutatorItem = block.mutatorItems[i];

                            var inputCase = getMutatorInputByMutatorItemUniqueId(block, mutatorItem.uniqueId, "case");
                            if (inputCase != null && inputCase.block != null) {
                                var result = manager.executeBlock(inputCase.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue) {
                                    var caseValue = result.value;
                                    if (caseValue == value) {
                                        var inputDo = getMutatorInputByMutatorItemUniqueId(block, mutatorItem.uniqueId, "do");
                                        if (inputDo != null) {
                                            if (inputDo.flowBlock != null) {
                                                manager.executeBlock(inputDo.flowBlock, eventVariables, scopeVariables, flow, flowState);
                                                if (flowState.modifierType == "break") {
                                                    flowState.modifierType = null;
                                                    switchBroken = true;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        if (!switchBroken) {
                            var inputDefault = getMutatorInputByMutatorItemUniqueId(block, mutatorItem.uniqueId, "default");
                            if (inputDefault != null) {
                                if (inputDefault.flowBlock != null) {
                                    manager.executeBlock(inputDefault.flowBlock, eventVariables, scopeVariables, flow, flowState);

                                    if (flowState.modifierType == "break")
                                        flowState.modifierType = null;
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (block.type == BlockType.CONTROL_BREAK) {
            flowState.modifierType = "break";
        }
        else if (block.type == BlockType.CONTROL_CONTINUE) {
            flowState.modifierType = "continue";
        }
        else if (block.type == BlockType.ENABLE_USER_INTERACTION) {
            player.enableUserInteraction();
        }
        else if (block.type == BlockType.DISABLE_USER_INTERACTION) {
            player.disableUserInteraction();
        }
        // PROCEDURE_CALL_NO_RETURN
        else if (block.type == BlockType.PROCEDURE_CALL_NO_RETURN) {
            var inputDefault = block.getInput("default");
            var procedureName = inputDefault.getItem("name").value;

            var executed = false;

            for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
                var layer = playerData.layers[layerIndex];

                for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                    var keyframe = layer.keyframes[keyframeIndex];

                    if (keyframe.blocks != null) {
                        for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                            var block_ = keyframe.blocks[blockIndex];

                            if (block_.type == BlockType.PROCEDURE_NO_RETURN) {
                                var inputDefault = block_.getInput("default");
                                var name = inputDefault.getItem("name").value;
                                if (name == procedureName) {
                                    manager.executeBlock(block_, eventVariables, scopeVariables, flow, flowState);
                                    executed = true;
                                    break;
                                }
                            }
                        }

                        if (executed) break;
                    }
                }

                if (executed) break;
            }
        }
        else if (block.type == BlockType.PROCEDURE_CALL_NO_RETURN_BY_NAME) {
            var inputDefault = block.getInput("default");

            var procedureName = "";

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, true, flowState);
                if (result != null && result.hasReturnValue)
                    procedureName = result.value;
            }

            if (procedureName != "") {
                var executed = false;

                for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
                    var layer = playerData.layers[layerIndex];

                    for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                        var keyframe = layer.keyframes[keyframeIndex];

                        if (keyframe.blocks != null) {
                            for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                                var block_ = keyframe.blocks[blockIndex];

                                if (block_.type == BlockType.PROCEDURE_NO_RETURN) {
                                    var inputDefault = block_.getInput("default");
                                    var name = inputDefault.getItem("name").value;
                                    if (name == procedureName) {
                                        manager.executeBlock(block_, eventVariables, scopeVariables, flow, flowState);
                                        executed = true;
                                        break;
                                    }
                                }
                            }

                            if (executed) break;
                        }
                    }

                    if (executed) break;
                }
            }
        }
        else if (block.type == BlockType.PROCEDURE_NO_RETURN) {
            var inputBlock = block.getInput("block");
            if (inputBlock != null && inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, flow, flowState);
        }
        else if (block.type == BlockType.PROCEDURE_CALL_RETURN) {
            var inputDefault = block.getInput("default");
            var procedureName = inputDefault.getItem("name").value;

            var executed = false;

            for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
                var layer = playerData.layers[layerIndex];

                for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                    var keyframe = layer.keyframes[keyframeIndex];

                    if (keyframe.blocks != null) {
                        for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                            var block_ = keyframe.blocks[blockIndex];

                            if (block_.type == BlockType.PROCEDURE_RETURN) {
                                var inputDefault = block_.getInput("default");
                                var name = inputDefault.getItem("name").value;
                                if (name == procedureName) {
                                    var result = manager.executeBlock(block_, eventVariables, scopeVariables, flow, flowState);
                                    if (result != null && result.hasReturnValue)
                                        return manager.returnValue(true, result.value);

                                    executed = true;

                                    break;
                                }
                            }
                        }

                        if (executed) break;
                    }
                }

                if (executed) break;
            }
        }
        else if (block.type == BlockType.PROCEDURE_CALL_RETURN_BY_NAME) {
            var inputDefault = block.getInput("default");
            var procedureName = "";

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    procedureName = result.value;
            }

            if (procedureName != "") {
                var executed = false;

                for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
                    var layer = playerData.layers[layerIndex];

                    for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                        var keyframe = layer.keyframes[keyframeIndex];

                        if (keyframe.blocks != null) {
                            for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                                var block_ = keyframe.blocks[blockIndex];

                                if (block_.type == BlockType.PROCEDURE_RETURN) {
                                    var inputDefault = block_.getInput("default");
                                    var name = inputDefault.getItem("name").value;
                                    if (name == procedureName) {
                                        var result = manager.executeBlock(block_, eventVariables, scopeVariables, flow, flowState);
                                        if (result != null && result.hasReturnValue)
                                            return manager.returnValue(true, result.value);

                                        executed = true;

                                        break;
                                    }
                                }
                            }

                            if (executed) break;
                        }
                    }

                    if (executed) break;
                }
            }
        }
        else if (block.type == BlockType.PROCEDURE_RETURN) {
            var inputBlock = block.getInput("block");
            if (inputBlock != null && inputBlock.block != null) {
                var result = manager.executeBlock(inputBlock.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    return manager.returnValue(true, result.value);
            }
        }
        else if (block.type == BlockType.PROCEDURE_CALL_FOR_RESULT) {
            var defaultInput = block.getInput("default");
            var procedureName = defaultInput.getItem("name").value;

            for (var i = 0; i < procedures.length; i++) {
                var procedure = procedures[i];
                if (procedure.name == procedureName) {
                    var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                    for (var j = 0; j < procedure.parameters.length; j++) {
                        var parameter = procedure.parameters[j];

                        var scopeVariable_ = {};
                        scopeVariable_.name = parameter.name;

                        for (var i = 0; i < block.inputs.length; i++) {
                            var input = block.inputs[i];
                            if (input.mutatorItemUniqueId == parameter.mutatorItemUniqueId) {
                                if (input.block != null) {
                                    var result = manager.executeBlock(input.block, eventVariables, scopeVariables, flow, flowState);
                                    if (result != null && result.hasReturnValue)
                                        scopeVariable_.value = result.value;
                                }
                            }
                        }

                        scopeVariables_.push(scopeVariable_);
                    }

                    if (procedure.flowBlock != null)
                        manager.executeBlock(procedure.flowBlock, eventVariables, scopeVariables_, true, flowState);

                    if (flowState.modifierType == "return") {
                        var returnValue = flowState.modifierValue;

                        flowState.modifierType = null;
                        flowState.modifierValue = null;

                        return manager.returnValue(true, returnValue);
                    }

                    break;
                }
            }
        }
        else if (block.type == BlockType.PROCEDURE_CALL) {
            var defaultInput = block.getInput("default");
            var procedureName = defaultInput.getItem("name").value;

            for (var i = 0; i < procedures.length; i++) {
                var procedure = procedures[i];
                if (procedure.name == procedureName) {

                    var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                    for (var j = 0; j < procedure.parameters.length; j++) {
                        var parameter = procedure.parameters[j];

                        var scopeVariable_ = {};
                        scopeVariable_.name = parameter.name;

                        for (var i = 0; i < block.inputs.length; i++) {
                            var input = block.inputs[i];
                            if (input.mutatorItemUniqueId == parameter.mutatorItemUniqueId) {
                                if (input.block != null) {
                                    var result = manager.executeBlock(input.block, eventVariables, scopeVariables, flow, flowState);
                                    if (result != null && result.hasReturnValue)
                                        scopeVariable_.value = result.value;
                                }
                            }
                        }

                        scopeVariables_.push(scopeVariable_);
                    }

                    if (procedure.flowBlock != null) {
                        var result = manager.executeBlock(procedure.flowBlock, eventVariables, scopeVariables_, true, flowState);
                        if (result != null && result.hasReturnValue)
                            return manager.returnValue(true, result.value);
                    }

                    break;
                }
            }
        }

        else if (block.type == BlockType.PROCEDURE_RETURN_RESULT) {
            var inputDefault = block.getInput("default");
            if (inputDefault != null && inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    flowState.modifierType = "return";
                    flowState.modifierValue = result.value;
                }
            } else {
                flowState.modifierType = "return";
                flowState.modifierValue = null;
            }
        }

        else if (block.type == BlockType.CALL_USER_FUNCTION_FOR_RESULT) {
            var inputDefault = block.getInput("default");
            var functionName = inputDefault.getItem("name").value;
            var parameters = null;

            if (block.mutatorItems != null) {
                parameters = {};

                for (var i = 0; i < block.mutatorItems.length; i++) {
                    var mutatorItem = block.mutatorItems[i];

                    for (var j = 0; j < block.inputs.length; j++) {
                        var input = block.inputs[j];

                        if (input.mutatorItemUniqueId == mutatorItem.uniqueId) {
                            var value = 0;

                            var parameterName = input.getItem("name").value;

                            if (input.block != null) {
                                var result = manager.executeBlock(input.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue)
                                    parameters[parameterName] = result.value;
                            }
                        }
                    }
                }
            }

            var result = player.callUserFunction(functionName, parameters);
            return manager.returnValue(true, result);
        }
        else if (block.type == BlockType.CALL_USER_FUNCTION) {
            var inputDefault = block.getInput("default");
            var functionName = inputDefault.getItem("name").value;
            var parameters = null;

            if (block.mutatorItems != null) {
                parameters = {};

                for (var i = 0; i < block.mutatorItems.length; i++) {
                    var mutatorItem = block.mutatorItems[i];

                    for (var j = 0; j < block.inputs.length; j++) {
                        var input = block.inputs[j];

                        if (input.mutatorItemUniqueId == mutatorItem.uniqueId) {
                            var value = 0;

                            var parameterName = input.getItem("name").value;

                            if (input.block != null) {
                                var result = manager.executeBlock(input.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue)
                                    parameters[parameterName] = result.value;
                            }
                        }
                    }
                }
            }
            player.callUserFunction(functionName, parameters);
        }
        else if (block.type == BlockType.ON_USER_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            var userParameters = eventVariables.getValue("parameters");

            scopeVariables_.push(manager.createVariable("parameters", userParameters));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, flow, flowState);
        }
        else if (block.type == BlockType.ON_INPUT_KEY_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var keyCode = eventVariables.getValue("keyCode");

            scopeVariables_.push(manager.createVariable("keyCode", keyCode));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, flow, flowState);
        }
        else if (block.type == BlockType.CHARACTER_FROM_CHAR_CODE) {
            var inputDefault = block.getInput("default");
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    var value = result.value;
            }

            return manager.returnValue(true, String.fromCharCode(value));
        }
        else if (block.type == BlockType.ON_STAGE_MOUSE_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            scopeVariables_.push(manager.createVariable("x", eventVariables.getValue("x")));
            scopeVariables_.push(manager.createVariable("y", eventVariables.getValue("y")));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, flow, flowState);
        }
        else if (block.type == BlockType.IS_KEY_PRESSED) {
            var inputDefault = block.getInput("default");
            var value = 1;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, keyStates[value]);
        }
        else if (block.type == BlockType.OPEN_HTML_LINK) {
            var inputDefault = block.getInput("default");
            var url = inputDefault.getItem("url").value;
            var name = inputDefault.getItem("name").value;

            var win = window.open(url, name);
            win.focus();
        }
        else if (block.type == BlockType.CREATE_OBJECT) {
            return manager.returnValue(true, {});
        }
        ///////////////////////////////////////////////////
        // LIST                                          //
        ///////////////////////////////////////////////////

        else if (block.type == BlockType.LIST_CREATE) {
            var items = new Array();

            if (block.mutatorItems != null) {
                for (var i = 0; i < block.mutatorItems.length; i++) {
                    var mutatorItem = block.mutatorItems[i];

                    for (var j = 0; j < block.inputs.length; j++) {
                        var input = block.inputs[j];

                        if (input.mutatorItemUniqueId == mutatorItem.uniqueId) {
                            var value = 0;

                            if (input.block != null) {
                                var result = manager.executeBlock(input.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue)
                                    items.push(result.value);
                            }
                        }
                    }
                }
            }

            return manager.returnValue(true, items);
        }
        else if (block.type == BlockType.LIST_CREATE_FROM_COMMA_TEXT) {
            var inputValue = block.getInput("default");
            var value = "";
            if (inputValue.block != null) {
                var result = manager.executeBlock(inputValue.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            return manager.returnValue(true, value.split(","));
        }
        else if (block.type == BlockType.LIST_LENGTH) {
            var inputValue = block.getInput("default");
            if (inputValue.block != null) {
                var result = manager.executeBlock(inputValue.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    arr = result.value;

                return manager.returnValue(true, arr.length);
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.LIST_LENGTH_MINUS_ONE) {
            var inputValue = block.getInput("default");
            if (inputValue.block != null) {
                var result = manager.executeBlock(inputValue.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    arr = result.value;

                return manager.returnValue(true, arr.length - 1);
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.LIST_ADD_ITEM) {
            var inputList = block.getInput("list");

            var list = null;

            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value;
            }

            // add mutator related items
            if (block.mutatorItems != null) {
                for (var i = 0; i < block.mutatorItems.length; i++) {
                    var mutatorItem = block.mutatorItems[i];

                    for (var j = 0; j < block.inputs.length; j++) {
                        var input = block.inputs[j];

                        if (input.mutatorItemUniqueId == mutatorItem.uniqueId) {
                            var value = 0;

                            if (input.block != null) {
                                var result = manager.executeBlock(input.block, eventVariables, scopeVariables, flow, flowState);
                                if (result != null && result.hasReturnValue)
                                    list.push(result.value);
                            }
                        }
                    }
                }
            }
        }
        else if (block.type == BlockType.LIST_ADD_ITEM_INTO) {
            var inputList = block.getInput("list");

            var index = -1;
            var list = null;
            if (inputList.block != null) {
                var inputItem = inputList.getItem("index");

                var result = manager.executeBlock(inputItem.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;

                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value;
            }

            if (index > list.length) {
                var count = index - list.length;
                for (var i = 0; i < count; i++)
                    list.push(null);
            }

            var inputObject = block.getInput("item");
            var item;
            if (inputObject.block != null) {
                var result = manager.executeBlock(inputObject.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    item = result.value;

                list.splice(index, 0, item);
            }
        }
        else if (block.type == BlockType.LIST_REMOVE_ITEM) {

            var list = null;
            var inputList = block.getInput("list");
            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value;
            }

            var inputItem = block.getInput("item");
            if (inputItem.block != null) {
                var result = manager.executeBlock(inputItem.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    item = result.value;

                var index = list.indexOf(item);
                list.splice(index, 1);
            }
        }
        else if (block.type == BlockType.LIST_REMOVE_ITEM_AT) {
            var inputList = block.getInput("list");

            var index = -1;
            var list = null;
            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value;
            }

            var inputIndex = block.getInput("index");
            if (inputIndex.block != null) {
                var result = manager.executeBlock(inputIndex.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;

                list.splice(index, 1);
            }
        }
        else if (block.type == BlockType.LIST_GET_ITEM_AT) {
            var inputList = block.getInput("list");
            var list = null;
            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value
            }

            var inputItemIndex = block.getInput("index");
            var index = -1;
            if (inputItemIndex.block != null) {
                var result = manager.executeBlock(inputItemIndex.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value
            }

            if (list != null && index != -1)
                return manager.returnValue(true, list[index]);
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.LIST_CONTAINS) {
            var inputList = block.getInput("list");

            var list = null;
            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value
            }

            if (list == null)
                throw new Error("list reference is empty!");

            var item = null;
            var inputItem = block.getInput("item");
            var result_ = -1;
            if (inputItem.block != null) {
                var result = manager.executeBlock(inputItem.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    item = result.value

                result_ = list.indexOf(item);
            }

            if (result_ > -1)
                return manager.returnValue(true, true);
            else
                return manager.returnValue(true, false);
        }
        else if (block.type == BlockType.LIST_INDEX_OF) {
            var inputList = block.getInput("list");

            var list = null;
            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value;
            }

            var itemIndex = 0;
            var inputItem = block.getInput("item");
            if (inputItem.block != null) {
                var result = manager.executeBlock(inputItem.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    itemIndex = result.value;

                return manager.returnValue(true, list.indexOf(itemIndex));
            }
            return manager.returnValue(true, -1);
        }
        else if (block.type == BlockType.LIST_SET_ITEM_AT) {
            var inputList = block.getInput("list");
            var list = null;
            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value;
            }

            var inputItemIndex = block.getInput("index");
            var index = -1;
            if (inputItemIndex.block != null) {
                var result = manager.executeBlock(inputItemIndex.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    index = result.value;
            }

            var inputValue = block.getInput("value");
            var value = undefined;
            if (inputValue.block != null) {
                var result = manager.executeBlock(inputValue.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            if (index > list.length) {
                var count = index - list.length;
                for (var i = 0; i < count; i++)
                    list.push(null);
            }

            list[index] = value;
        } else if (block.type == BlockType.LIST_SHUFFLE) {
            var inputList = block.getInput("list");
            var list = null;
            if (inputList.block != null) {
                var result = manager.executeBlock(inputList.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    list = result.value;
            }

            // shuffle the list
            var shuffledList = [];

            for (var i = 0; i < list.length; i++)
                shuffledList.push(list[i]);

            var j, x, i;
            for (i = shuffledList.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = shuffledList[i];
                shuffledList[i] = shuffledList[j];
                shuffledList[j] = x;
            }

            return manager.returnValue(true, shuffledList);
        } else if (block.type == BlockType.GET_DEPTH) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var depth = designObject.depth != undefined ? designObject.depth : 0;
            return manager.returnValue(true, depth);
        } else if (block.type == BlockType.SET_DEPTH) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;

            var zIndex = 0;

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    zIndex = result.value;
            }

            var $designObjectElement = $("#" + id);
            $designObjectElement.css("z-index", zIndex);
            var designObject = $designObjectElement.data("designObject");
            designObject.depth = zIndex;
        } else if (block.type == BlockType.GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = ""
            var itemId = inputDefault.getItem("id");
            if (itemId.block != null) {
                var result = manager.executeBlock(itemId.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    id = result.value;
            }

            var propertyName = "";
            var itemPropertyName = inputDefault.getItem("propertyName");
            if (itemPropertyName != null) {
                var result = manager.executeBlock(itemPropertyName.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    propertyName = result.value;
            }

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var designObjectController = player.getDesignObjectController(designObject.type);

            return manager.returnValue(true, designObjectController.getProperty(designObject, $designObjectElement, propertyName));
        } else if (block.type == BlockType.SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = ""
            var itemId = inputDefault.getItem("id");
            if (itemId.block != null) {
                var result = manager.executeBlock(itemId.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    id = result.value;
            }

            var propertyName = "";
            var itemPropertyName = inputDefault.getItem("propertyName");
            if (itemPropertyName != null) {
                var result = manager.executeBlock(itemPropertyName.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    propertyName = result.value;
            }

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var designObjectController = player.getDesignObjectController(designObject.type);

            designObjectController.setProperty(designObject, $designObjectElement, propertyName, value);
        } else if (block.type == BlockType.GET_REFERENCE) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            return manager.returnValue(true, id);
        } else if (block.type == BlockType.GET_REFERENCE_PROPERTY) {
            var inputDefault = block.getInput("default");
            var propertyName = inputDefault.getItem("propertyName").value;
            return manager.returnValue(true, propertyName);
        } else if (block.type == BlockType.GET_ATTRIBUTE) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var attributeName = inputDefault.getItem("attributeName").value;

            var $designObjectElement = $("#" + id);
            return manager.returnValue(true, $designObjectElement.attr(attributeName));
        } else if (block.type == BlockType.SET_ATTRIBUTE) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var attributeName = inputDefault.getItem("attributeName").value;

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue) {
                    var $designObjectElement = $("#" + id);
                    $designObjectElement.attr(attributeName, result.value);
                }
            }
        }

        return manager.returnValue(false);
    }

    var onDrop = function (e, dropObj, dragObj) {
        var block = e.data.block;

        var eventVariables = manager.createParameters();
        eventVariables.add("dragObject", dragObj);
        eventVariables.add("dropObject", dropObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onInputKeyDown = function (e) {
        var keyCode = parseInt(e.keyCode);
        keyStates[keyCode] = true;
    }

    var onInputKeyUp = function (e) {
        var keyCode = parseInt(e.keyCode);
        keyStates[keyCode] = false;
    }

    var onKeyAction = function (e) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();
        eventVariables.add("keyCode", e.keyCode);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onStageMouseEvent = function (e) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();

        if (e.Sbt != undefined) {
            eventVariables.add("x", e.Sbt.touches[0].pageX);
            eventVariables.add("y", e.Sbt.touches[0].pageY);
        }

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var getMutatorInputByMutatorItemUniqueId = function (block, mutatorItemUniqueId, mutatorName) {
        for (var i = 0; i < block.inputs.length; i++) {
            var input = block.inputs[i];
            if (input.mutatorItemUniqueId == mutatorItemUniqueId) {
                if (mutatorName != undefined) {
                    if (input.mutatorName == mutatorName)
                        return input;
                } else
                    return input;
            }
        }

        return null;
    }

    var getMutatorInputItemByMutatorItemUniqueId = function (input, mutatorItemUniqueId, mutatorName) {
        for (var i = 0; i < input.items.length; i++) {
            var inputItem = input.items[i];
            if (inputItem.mutatorItemUniqueId == mutatorItemUniqueId) {
                if (mutatorName != undefined) {
                    if (inputItem.mutatorName == mutatorName)
                        return inputItem;
                }
                else
                    return inputItem;
            }
        }

        return null;
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.MATH_VALUE);
    this.blockTypes.push(BlockType.MATH_FLOAT_VALUE);
    this.blockTypes.push(BlockType.MATH_SUM);
    this.blockTypes.push(BlockType.MATH_SUBTRACT);
    this.blockTypes.push(BlockType.MATH_MULTIPLY);
    this.blockTypes.push(BlockType.MATH_DIVIDE);
    this.blockTypes.push(BlockType.MATH_EQUALITY);
    this.blockTypes.push(BlockType.MATH_RANDOM);
    this.blockTypes.push(BlockType.MATH_POWER);
    this.blockTypes.push(BlockType.MATH_MIN_MAX);
    this.blockTypes.push(BlockType.MATH_ROUND);
    this.blockTypes.push(BlockType.MATH_FIXED_DECIMAL_PLACES);
    this.blockTypes.push(BlockType.MATH_TO_NUMERIC);
    this.blockTypes.push(BlockType.MATH_ABSOLUTE);
    this.blockTypes.push(BlockType.MATH_ATAN2);
    this.blockTypes.push(BlockType.MATH_ATAN);
    this.blockTypes.push(BlockType.MATH_ACOS);
    this.blockTypes.push(BlockType.MATH_ASIN);
    this.blockTypes.push(BlockType.MATH_CEIL);
    this.blockTypes.push(BlockType.MATH_COS);
    this.blockTypes.push(BlockType.MATH_EXP);
    this.blockTypes.push(BlockType.MATH_FLOOR);
    this.blockTypes.push(BlockType.MATH_LOG);
    this.blockTypes.push(BlockType.MATH_SIN);
    this.blockTypes.push(BlockType.MATH_SQRT);
    this.blockTypes.push(BlockType.MATH_TAN);
    this.blockTypes.push(BlockType.MATH_CONSTANT);
    this.blockTypes.push(BlockType.MATH_MINUS_ONE);
    this.blockTypes.push(BlockType.MATH_MINUMUM_IN_LIST);
    this.blockTypes.push(BlockType.MATH_MAXIMUM_IN_LIST);
    this.blockTypes.push(BlockType.MATH_MOD);
    this.blockTypes.push(BlockType.MATH_IS_NAN);
    this.blockTypes.push(BlockType.MATH_PLUS_ONE);

    this.blockTypes.push(BlockType.TEXT_VALUE);
    this.blockTypes.push(BlockType.TEXT_COMPARE);
    this.blockTypes.push(BlockType.TEXT_CONTAINS);
    this.blockTypes.push(BlockType.TEXT_TRIM);
    this.blockTypes.push(BlockType.TEXT_JOIN);
    this.blockTypes.push(BlockType.TEXT_INDEX_OF);
    this.blockTypes.push(BlockType.TEXT_SEGMENT);
    this.blockTypes.push(BlockType.TEXT_LENGTH);
    this.blockTypes.push(BlockType.TEXT_STARTS_AT);
    this.blockTypes.push(BlockType.TEXT_TO_TEXT);
    this.blockTypes.push(BlockType.TEXT_IS_EMPTY);
    this.blockTypes.push(BlockType.TEXT_CONCAT);
    this.blockTypes.push(BlockType.TEXT_SPLIT);

    this.blockTypes.push(BlockType.FONT_ATTRIBUTES);
    this.blockTypes.push(BlockType.FONT_SIZE);
    this.blockTypes.push(BlockType.FONT_NAME);

    this.blockTypes.push(BlockType.LOGIC_VALUE);
    this.blockTypes.push(BlockType.LOGIC_EQUALITY);
    this.blockTypes.push(BlockType.LOGIC_AND_OR);
    this.blockTypes.push(BlockType.LOGIC_INVERSE);

    this.blockTypes.push(BlockType.ALERT);
    this.blockTypes.push(BlockType.CONSOLE_INFO);
    this.blockTypes.push(BlockType.CONSOLE_INFO_WITH_PREFIX);
    this.blockTypes.push(BlockType.CONSOLE_CLEAR);

    this.blockTypes.push(BlockType.CONTROL_IF_THEN);
    this.blockTypes.push(BlockType.CONTROL_IF_THEN_ELSE);
    this.blockTypes.push(BlockType.CONTROL_IF_THEN_ELSE_RETURN);
    this.blockTypes.push(BlockType.CONTROL_WHILE);
    this.blockTypes.push(BlockType.CONTROL_DO_WHILE);
    this.blockTypes.push(BlockType.CONTROL_FOREACH);
    this.blockTypes.push(BlockType.CONTROL_SWITCH_CASE);
    this.blockTypes.push(BlockType.CONTROL_BREAK);
    this.blockTypes.push(BlockType.CONTROL_CONTINUE);

    this.blockTypes.push(BlockType.ENABLE_USER_INTERACTION);
    this.blockTypes.push(BlockType.DISABLE_USER_INTERACTION);

    this.blockTypes.push(BlockType.ON_INPUT_KEY_EVENT);
    this.blockTypes.push(BlockType.ON_STAGE_MOUSE_EVENT);
    this.blockTypes.push(BlockType.CHARACTER_FROM_CHAR_CODE);

    this.blockTypes.push(BlockType.IS_KEY_PRESSED);

    this.blockTypes.push(BlockType.OPEN_HTML_LINK);

    this.blockTypes.push(BlockType.VARIABLE_GET_VALUE);
    this.blockTypes.push(BlockType.VARIABLE_SET_VALUE);
    this.blockTypes.push(BlockType.VARIABLE_GET_PROPERTY_VALUE);
    this.blockTypes.push(BlockType.VARIABLE_SET_PROPERTY_VALUE);
    this.blockTypes.push(BlockType.VARIABLE_INITIALIZE_GLOBAL);
    this.blockTypes.push(BlockType.VARIABLE_INITIALIZE_LOCAL);

    this.blockTypes.push(BlockType.CREATE_OBJECT);
    this.blockTypes.push(BlockType.GET_OBJECT_PROPERTY_VALUE);
    this.blockTypes.push(BlockType.SET_OBJECT_PROPERTY_VALUE);
    this.blockTypes.push(BlockType.COLOR_VALUE);

    this.blockTypes.push(BlockType.PROCEDURE_CALL_FOR_RESULT);
    this.blockTypes.push(BlockType.PROCEDURE_CALL);
    this.blockTypes.push(BlockType.PROCEDURE);
    this.blockTypes.push(BlockType.PROCEDURE_RETURN_RESULT);

    this.blockTypes.push(BlockType.CALL_USER_FUNCTION);
    this.blockTypes.push(BlockType.CALL_USER_FUNCTION_FOR_RESULT);
    this.blockTypes.push(BlockType.ON_USER_EVENT);

    this.blockTypes.push(BlockType.TIMELINE_PLAYER_CONTROL);
    this.blockTypes.push(BlockType.TIMELINE_PLAYER_CONTROL_GO_TO);
    this.blockTypes.push(BlockType.TIMELINE_PLAYER_CONTROL_GO_TO_SELECTED);
    this.blockTypes.push(BlockType.TIMELINE_SET_FRAME_PER_SECOND);
    this.blockTypes.push(BlockType.TIMELINE_RESET);
    this.blockTypes.push(BlockType.ON_TIMELINE_EVENT);
    this.blockTypes.push(BlockType.TIMELINE_GET_FRAME_INDEX);
    this.blockTypes.push(BlockType.TIMELINE_GET_STATE);
    this.blockTypes.push(BlockType.ON_TIMELINE_FRAME_CHANGE_EVENT);

    this.blockTypes.push(BlockType.LIST_CREATE);
    this.blockTypes.push(BlockType.LIST_CREATE_FROM_COMMA_TEXT);
    this.blockTypes.push(BlockType.LIST_LENGTH);
    this.blockTypes.push(BlockType.LIST_LENGTH_MINUS_ONE);
    this.blockTypes.push(BlockType.LIST_ADD_ITEM);
    this.blockTypes.push(BlockType.LIST_ADD_ITEM_INTO);
    this.blockTypes.push(BlockType.LIST_REMOVE_ITEM);
    this.blockTypes.push(BlockType.LIST_REMOVE_ITEM_AT);
    this.blockTypes.push(BlockType.LIST_GET_ITEM_AT);
    this.blockTypes.push(BlockType.LIST_CONTAINS);
    this.blockTypes.push(BlockType.LIST_INDEX_OF);
    this.blockTypes.push(BlockType.LIST_SET_ITEM_AT);
    this.blockTypes.push(BlockType.LIST_SHUFFLE);

    this.blockTypes.push(BlockType.GET_DEPTH);
    this.blockTypes.push(BlockType.SET_DEPTH);

    this.blockTypes.push(BlockType.GET_PROPERTY);
    this.blockTypes.push(BlockType.SET_PROPERTY);
    this.blockTypes.push(BlockType.GET_REFERENCE);
    this.blockTypes.push(BlockType.GET_REFERENCE_PROPERTY);

    this.blockTypes.push(BlockType.GET_ATTRIBUTE);
    this.blockTypes.push(BlockType.SET_ATTRIBUTE);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function ImageDesignObjectController() {
    var DesignObjectType = {
        IMAGE: "image"
    };

    var ImageDesignObjectPropertyName = {
        IMAGE_URL: "imageUrl",
        FRAME_INDEX: "frameIndex",
        IS_SPRITE_LOOPING: "isSpriteLooping",
        FRAMES_PER_SECOND: "framesPerSecond"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.IMAGE) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            return $(designObjectElementText);
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.IMAGE) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

            if (designObject.imageUrl != "") {
                if (designObject.isSprite) {
                    var sequencer = new Sbt.CanvasSequencer(designObjectElementId,
                        designObject.spriteWidth,
                        designObject.spriteHeight,
                        designObject.imageName,
                        designObject.spriteFrameCount,
                        designObject.spriteFramePerSecond,
                        designObject.isSpriteLooping,
                        designObject.imageExtension,
                        designObject.imagePath);

                    if (designObject.spriteSequencerType == "css")
                        sequencer.mode = sequencer.MODE_CSS;
                    else if (designObject.spriteSequencerType == "canvas")
                        sequencer.mode = sequencer.MODE_CANVAS;
                    else if (designObject.spriteSequencerType == "svg")
                        sequencer.mode = sequencer.MODE_SVG;

                    sequencer.gotoAndStop(designObject.spriteInitialFrameIndex);

                    $designObjectElement.data("controllers.sequencer", sequencer);

                    $designObjectElement.css("background-repeat", "no-repeat");
                } else {
                    var backgroundSize = "none";

                    if (designObject.imageFormat == "bitmap") {
                        if (designObject.resizingType == "scale") {
                            if (designObject.keepAspectRatio)
                                backgroundSize = "contain";
                            else
                                backgroundSize = designObject.width + "px " + designObject.height + "px";
                        } else if (designObject.resizingType == "clip") {
                            backgroundSize = "auto";
                        }
                    } else if (designObject.imageFormat == "svg") {
                        backgroundSize = designObject.width + "px " + designObject.height + "px";
                    }

                    if (!VFabrikaHelper.isIE) {
                        $designObjectElement.css({
                            "background-image": "url('" + framework.localPath + designObject.imageUrl + "')",
                            "background-color": "transparent",
                            "background-repeat": "no-repeat",
                            "background-size": backgroundSize
                        });
                    } else {
                        if (designObject.imageFormat != "svg") {
                            $designObjectElement.css({
                                "background-image": "url('" + framework.localPath + designObject.imageUrl + "')",
                                "background-color": "transparent",
                                "background-repeat": "no-repeat",
                                "background-size": backgroundSize
                            });
                        } else {
                            $designObjectElement.append("<img src='" + framework.localPath + designObject.imageUrl + "'></img>");
                        }
                    }
                }
            }
        }
    }

    this.showElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.IMAGE) {
            if (designObject.autoAnimate && designObject.isSprite) {
                var sequencer = $designObjectElement.data("controllers.sequencer");
                sequencer.gotoAndPlay(designObject.spriteInitialFrameIndex);
            }
        }
    }

    this.hideElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.IMAGE) {
            if (designObject.isSprite) {
                var sequencer = $designObjectElement.data("controllers.sequencer");
                sequencer.stop();
            }
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);

        if (!designObject.isSprite)
            $designObjectElement.css("background-size", tweenSize.width + "px " + tweenSize.height + "px");
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.IMAGE_URL.toLowerCase())
                return designObject.imageUrl;
            else if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.FRAME_INDEX.toLowerCase()) {
                var sequencer = $designObjectElement.data("controllers.sequencer");
                return sequencer.currentFrame.key;
            }
            else if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.IS_SPRITE_LOOPING.toLowerCase())
                return designObject.isSpriteLooping;
            else if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.FRAMES_PER_SECOND.toLowerCase())
                return designObject.framesPerSecond;
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.IMAGE_URL.toLowerCase()) {
                designObject.imageFormat = !VFabrikaHelper.endsWith(value, ".svg") ? "bitmap" : "svg";

                if (!designObject.isSprite) {
                    var backgroundSize = "none";

                    if (designObject.imageFormat == "bitmap") {
                        if (designObject.resizingType == "scale") {
                            if (designObject.keepAspectRatio)
                                backgroundSize = "contain";
                            else
                                backgroundSize = designObject.width + "px " + designObject.height + "px";
                        } else if (designObject.resizingType == "clip") {
                            backgroundSize = "auto";
                        }
                    } else if (designObject.imageFormat == "svg") {
                        backgroundSize = designObject.width + "px " + designObject.height + "px";
                    }

                    if (value != "") {
                        $designObjectElement.css({
                            "background-image": "url('" + framework.localPath + value + "')",
                            "background-color": "transparent",
                            "background-repeat": "no-repeat",
                            "background-size": backgroundSize
                        });
                    } else {
                        $designObjectElement.css({
                            "background-image": "none",
                            "background-color": "transparent",
                            "background-repeat": "no-repeat",
                            "background-size": backgroundSize
                        });
                    }
                } else {
                    //TODO: implement for sprites
                }

                designObject.imageUrl = value;
            } else if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.FRAME_INDEX.toLowerCase()) {
                var sequencer = $designObjectElement.data("controllers.sequencer");
                if (sequencer.isPlaying)
                    sequencer.gotoAndPlay(value);
                else
                    sequencer.gotoAndStop(value);
            } else if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.IS_SPRITE_LOOPING.toLowerCase()) {
                designObject.isSpriteLooping = value;
                var sequencer = $designObjectElement.data("controllers.sequencer");
                sequencer.loop = value;
            } else if (propertyName.toLowerCase() == ImageDesignObjectPropertyName.FRAMES_PER_SECOND.toLowerCase()) {
                designObject.framesPerSecond = value;
                var sequencer = $designObjectElement.data("controllers.sequencer");
                sequencer.fps = value;
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.IMAGE);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function ImageDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Image";

    var BlockType = {
        IMAGE_DESIGN_OBJECT_GET_PROPERTY: "imageDesignObjectGetProperty",
        IMAGE_DESIGN_OBJECT_SET_PROPERTY: "imageDesignObjectSetProperty",
        IMAGE_DESIGN_OBJECT_ANIMATION: "imageDesignObjectAnimation",
        IMAGE_DESIGN_OBJECT_ANIMATION_GO_TO: "imageDesignObjectAnimationGoTo",
        IMAGE_DESIGN_OBJECT_ON_MOUSE_EVENT: "imageDesignObjectOnMouseEvent",
        IMAGE_DESIGN_OBJECT_ON_ANIMATION_EVENT: "imageDesignObjectOnAnimationEvent",
        IMAGE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT: "imageDesignObjectOnDragAndDropEvent",
        IMAGE_DESIGN_OBJECT_ON_DRAG_EVENT: "imageDesignObjectOnDragEvent",
        IMAGE_DESIGN_OBJECT_GET_DRAG_OBJECT: "imageDesignObjectGetDragObject",
        IMAGE_DESIGN_OBJECT_GET_DRAG_OBJECT_ID: "imageDesignObjectGetDragObjectId",
        IMAGE_DESIGN_OBJECT_GET_DROP_OBJECT: "imageDesignObjectGetDropObject",
        IMAGE_DESIGN_OBJECT_GET_DROP_OBJECT_ID: "imageDesignObjectGetDropObjectId",
        IMAGE_DESIGN_OBJECT_ADD_CLASS: "imageDesignObjectAddClass",
        IMAGE_DESIGN_OBJECT_REMOVE_CLASS: "imageDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_MOUSE_EVENT ||
                            block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_ANIMATION_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var inputDefault = block.getInput("default");
                            if (inputDefault != null) {
                                var blockInputItem = inputDefault.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = inputDefault.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_ANIMATION_EVENT) {
                                    var sequencer = $("#" + designObjectId).data("controllers.sequencer");
                                    if (eventName == "animationFinish")
                                        $(sequencer).on(sequencer.EVENT_FINISHED, { "block": block }, onSequencerFinished);
                                    else if (eventName == "animationStart")
                                        $(sequencer).on("onAnimationStart", { "block": block }, onSequencerStarted);
                                    else if (eventName == "animationStop")
                                        $(sequencer).on("onAnimationStop", { "block": block }, onSequencerStopped);
                                    else if (eventName == "frameChange")
                                        $(sequencer).on(sequencer.EVENT_IMAGE_CHANGE, { "block": block }, onSequencerFrameChanged);
                                } else {
                                    var eventName_ = "";

                                    if (eventName == "mousedown")
                                        eventName_ = Sbt.Actions.down;
                                    else if (eventName == "mouseup")
                                        eventName_ = Sbt.Actions.up;
                                    else if (eventName == "mousemove")
                                        eventName_ = Sbt.Actions.move;
                                    else if (eventName == "click")
                                        eventName_ = Sbt.Actions.click;
                                    else
                                        eventName_ = eventName;

                                    if (eventName_ != "")
                                        $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                                }
                            }
                        }
                        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
                            var inputDefault = block.getInput("default");
                            var designObjectId = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + designObjectId);

                            if (designObjectId != "") {
                                var dropProxyObject = player.createDropHandlerForDesignObject(designObjectId);
                                $(dropProxyObject).on("drop", { "block": block }, onDrop);
                            }
                        }
                        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_DRAG_EVENT) {
                            var inputDefault = block.getInput("default");
                            var designObjectId = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + designObjectId);
                            var eventName = inputDefault.getItem("eventName").value;

                            if (designObjectId != "" && eventName != "") {
                                player.createDragMembersForDesignObject(designObjectId);
                                var dragHandler = $designObjectElement.data("controllers.dragHandler");
                                $(dragHandler).on(eventName, { "block": block }, onDrag);
                            }
                        }
                    }
                }
            }
        }
    }

    var onDrop = function (e, dropObj, dragObj) {
        var block = e.data.block;
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj);
        eventVariables.add("dropObject", dropObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onDrag = function (e, dragObj) {
        var block = e.data.block;
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_MOUSE_EVENT ||
            block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_ANIMATION_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                if (eventName == "frameChange") {
                    var frameIndex = eventVariables.getValue("frameIndex");
                    scopeVariables_.push(manager.createVariable("frameIndex", frameIndex));
                }

                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
            }
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ANIMATION) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var command = inputDefault.getItem("command").value;

            var sequencer = $("#" + id).data("controllers.sequencer");

            if (command == "play") {
                if (sequencer.currentFrame.src == sequencer.frames.length)
                    sequencer.gotoAndPlay(1);
                else
                    sequencer.start();

                $(sequencer).trigger("onAnimationStart"); // custom event
            } else if (command == "stop") {
                sequencer.stop();
                $(sequencer).trigger("onAnimationStop"); // custom event
            }
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ANIMATION_GO_TO) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var command = inputDefault.getItem("command").value;

            var frameIndex = 0;

            var itemFrameIndex = inputDefault.getItem("frameIndex");
            if (itemFrameIndex.block != null) {
                var result = manager.executeBlock(itemFrameIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    frameIndex = parseInt(result.value);
            }

            var sequencer = $("#" + id).data("controllers.sequencer");

            if (command == "play")
                sequencer.gotoAndPlay(frameIndex);
            else if (command == "stop")
                sequencer.gotoAndStop(frameIndex);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_DRAG_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            scopeVariables_.push(manager.createVariable("dragObject", dragObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            var dropObject = eventVariables.getValue("dropObject");

            scopeVariables_.push(manager.createVariable("dragObject", dragObject));
            scopeVariables_.push(manager.createVariable("dropObject", dropObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "value")
                return manager.returnValue(true, designObject.value);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName.toLowerCase() == "imageUrl".toLowerCase())
                return manager.returnValue(true, designObject.imageUrl);
            else if (propertyName == "frameIndex") {
                var sequencer = $designObjectElement.data("controllers.sequencer");
                return manager.returnValue(true, sequencer.currentFrame.key)
            } else if (propertyName == "isLooping")
                return manager.returnValue(true, designObject.isSpriteLooping);
            else if (propertyName == "framesPerSecond")
                return manager.returnValue(true, designObject.framesPerSecond);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObjectElement = $designObjectElement[0];
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    if (designObject.resizingType == "scale") {
                        var width = $designObjectElement.css("width").replace("px", "");
                        var height = $designObjectElement.css("height").replace("px", "");
                        $designObjectElement.css("background-size", width + "px " + height + "px");
                    } else if (designObject.resizingType == "clip") {
                        //
                    }
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    if (designObject.resizingType == "scale") {
                        var width = $designObjectElement.css("width").replace("px", "");
                        var height = $designObjectElement.css("height").replace("px", "");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    } else if (designObject.resizingType == "clip") {
                        //
                    }
                }
                else if (propertyName == "rotation") {
                    designObject.rotation = value;
                    DesignObjectHelper.applyRotation($designObjectElement, designObject);
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                } else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
                else if (propertyName.toLowerCase() == "imageUrl".toLowerCase()) {
                    designObject.imageFormat = !VFabrikaHelper.endsWith(value, ".svg") ? "bitmap" : "svg";

                    if (!designObject.isSprite) {
                        var backgroundSize = "none";

                        if (designObject.imageFormat == "bitmap") {
                            if (designObject.resizingType == "scale") {
                                if (designObject.keepAspectRatio)
                                    backgroundSize = "contain";
                                else
                                    backgroundSize = designObject.width + "px " + designObject.height + "px";
                            } else if (designObject.resizingType == "clip") {
                                backgroundSize = "auto";
                            }
                        } else if (designObject.imageFormat == "svg") {
                            backgroundSize = designObject.width + "px " + designObject.height + "px";
                        }

                        if (value != "") {
                            $designObjectElement.css({
                                "background-image": "url('" + framework.localPath + value + "')",
                                "background-color": "transparent",
                                "background-repeat": "no-repeat",
                                "background-size": backgroundSize
                            });
                        } else {
                            $designObjectElement.css({
                                "background-image": "none",
                                "background-color": "transparent",
                                "background-repeat": "no-repeat",
                                "background-size": backgroundSize
                            });
                        }
                    } else {
                        //TODO: implement for sprites
                    }

                    designObject.imageUrl = value;
                }
                else if (propertyName == "frameIndex") {
                    var sequencer = $designObjectElement.data("controllers.sequencer");
                    if (sequencer.isPlaying)
                        sequencer.gotoAndPlay(value);
                    else
                        sequencer.gotoAndStop(value);
                } else if (propertyName == "isSpriteLooping") {
                    designObject.isSpriteLooping = value;
                    var sequencer = $designObjectElement.data("controllers.sequencer");
                    sequencer.loop = value;
                } else if (propertyName == "framesPerSecond") {
                    designObject.framesPerSecond = value;
                    var sequencer = $designObjectElement.data("controllers.sequencer");
                    sequencer.fps = value;
                }
            }
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_GET_DRAG_OBJECT) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_GET_DRAG_OBJECT_ID) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject.id);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_GET_DROP_OBJECT) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_GET_DROP_OBJECT_ID) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject.id);
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.IMAGE_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        return DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
    }

    var onSequencerFinished = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onSequencerStarted = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onSequencerStopped = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onSequencerFrameChanged = function (e) {
        var block = e.data.block;

        var frameIndex = parseInt(e.currentTarget.currentFrame.src);

        var eventVariables = manager.createVariables();
        eventVariables.add("frameIndex", frameIndex);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_ANIMATION);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_ANIMATION_GO_TO);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_ON_MOUSE_EVENT);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_ON_ANIMATION_EVENT);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_ON_DRAG_EVENT);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_GET_DRAG_OBJECT);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_GET_DRAG_OBJECT_ID);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_GET_DROP_OBJECT);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_GET_DROP_OBJECT_ID);

    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.IMAGE_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function SoundDesignObjectController(player, playerData) {
    var DesignObjectType = {
        SOUND: "sound"
    };

    var SoundDesignObjectPropertyName = {
        SOUND_URL: "soundUrl",
        IS_LOOPED: "isLooped"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.SOUND) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.SOUND) {
            var sound = new Sbt.Sound(designObject.soundFileName,
                designObject.soundPath,
                false,
                designObject.isLooped,
                false,
                true);
            $designObjectElement.data("controllers.sound", sound);
        }
    }

    this.showElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.SOUND) {
            var sound = $designObjectElement.data("controllers.sound");
            if (designObject.isAutoPlay)
                sound.playSound();
        }
    }

    this.hideElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.SOUND) {
            var sound = $designObjectElement.data("controllers.sound");
            if (sound.isPlaying)
                sound.stopSound();
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            var sound = $designObjectElement.data("controllers.sound");

            if (propertyName.toLowerCase() == SoundDesignObjectPropertyName.SOUND_URL.toLowerCase()) {
                return sound.soundUrl;
            } else if (propertyName.toLowerCase() == SoundDesignObjectPropertyName.IS_LOOPED.toLowerCase()) {
                return sound.isLooped;
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == SoundDesignObjectPropertyName.SOUND_URL.toLowerCase()) {
                designObject.soundUrl = value;
            } else if (propertyName.toLowerCase() == SoundDesignObjectPropertyName.IS_LOOPED.toLowerCase()) {
                var sound = $designObjectElement.data("controllers.sound");
                sound.isLooped = value;
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.SOUND);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function SoundDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Sound";

    var BlockType = {
        SOUND_DESIGN_OBJECT_GET_PROPERTY: "soundDesignObjectGetProperty",
        SOUND_DESIGN_OBJECT_SET_PROPERTY: "soundDesignObjectSetProperty",
        SOUND_DESIGN_OBJECT_PLAYER_CONTROL: "soundDesignObjectPlayerControl",
        SOUND_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT: "soundDesignObjectOnPlayerControlEvent"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.SOUND_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var sound = $("#" + designObjectId).data("controllers.sound");
                                if (eventName == "soundStart")
                                    $(sound).on("start", { "block": block }, onSoundStart);
                                else if (eventName == "soundStop")
                                    $(sound).on("stop", { "block": block }, onSoundStop);
                                else if (eventName == "soundFinish")
                                    $(sound).on(sound.EVENT_AUDIO_ENDED, { "block": block }, onSoundEnded);

                            }
                        }
                    }
                }
            }
        }
    }

    var onSoundStart = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onSoundStop = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onSoundEnded = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.SOUND_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT) {

            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if ($designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        }
        else if (block.type == BlockType.SOUND_DESIGN_OBJECT_GET_PROPERTY) {

            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var sound = $designObjectElement.data("controllers.sound");
            var designObject = $designObjectElement.data("designObject");

            var propertyName = inputDefault.getItem("propertyName").value;

            if (propertyName == "soundPath")
                return manager.returnValue(true, sound.soundPath);
            else if (propertyName == "soundFileName")
                return manager.returnValue(true, sound.soundFileName);
            else if (propertyName == "tag") {

                return manager.returnValue(true, designObject.tag);
            }
            else if (propertyName == "isLooped")
                return manager.returnValue(true, sound.isLoop);
            else if (propertyName == "soundUrl")
                return manager.returnValue(true, sound.soundUrl);
        }
        else if (block.type == BlockType.SOUND_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var sound = $designObjectElement.data("controllers.sound");
            var designObject = $designObjectElement.data("designObject");

            var propertyName = inputDefault.getItem("propertyName").value;

            var value = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            if (propertyName == "soundPath")
                sound.soundPath = value;
            else if (propertyName == "soundFileName")
                sound.soundFileName = value;
            else if (propertyName == "tag")
                designObject.tag = value;
            else if (propertyName == "isLooped")
                sound.isLoop = value;
            else if (propertyName == "soundUrl") {
                designObject.soundUrl = value;
                //TODO: set soundUrl of sound object to load
            }
        }
        else if (block.type == BlockType.SOUND_DESIGN_OBJECT_PLAYER_CONTROL) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var command = inputDefault.getItem("command").value;

            var sound = $("#" + id).data("controllers.sound");

            if (command == "play") {
                if (typeof sound.isPaused !== "undefined" && sound.isPaused) {
                    sound.isPaused = false;
                    sound.audioDom[0].play();
                }
                else {
                    $(sound).triggerHandler("start", { "block": block });
                    sound.playSound();
                }            
            }
            else if (command == "stop") {
                $(sound).triggerHandler("stop", { "block": block });
                sound.stopSound();

                if (typeof sound.audioDom[0] !== "undefined")
                    sound.audioDom[0].currentTime = 0;
            }
            else if (command == "pause") {
                sound.isPaused = true;
                sound.audioDom[0].pause();
            }
        }

        return manager.returnValue(false);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.SOUND_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.SOUND_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.SOUND_DESIGN_OBJECT_PLAYER_CONTROL);
    this.blockTypes.push(BlockType.SOUND_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function VideoDesignObjectController(player, playerData) {
    var DesignObjectType = {
        VIDEO: "video"
    };

    var VideoDesignObjectPropertyName = {
        IS_PLAYING: "isPlaying",
        IS_SEEKING: "isSeeking",
        VIDEO_URL: "videoUrl",
        POSTER_URL: "posterUrl"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.VIDEO) {
            // create element
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            return $(designObjectElementText);
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.VIDEO) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectVideoElementText = "<div id='" + designObjectElementId + "_video'></div>";
            var $designObjectVideoElement = $(designObjectVideoElementText);
            $designObjectElement.append($designObjectVideoElement);

            // create video controller
            var video = new Sbt.Video(designObjectElementId + "_video",
                designObject.videoUrl,
                designObject.width,
                designObject.height,
                "resources/video/",
                designObject.hasControls,
                false,
                designObject.isLooped);
            video.poster = designObject.posterUrl;
            $designObjectElement.data("controllers.video", video);

            video.show();
        }
    }

    this.showElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.VIDEO) {
            var video = $designObjectElement.data("controllers.video");
            if (designObject.isAutoPlay)
                video.play();
        }
    }

    this.hideElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.VIDEO) {
            var video = $designObjectElement.data("controllers.video");
            video.stop();
        }
    };

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == VideoDesignObjectPropertyName.VIDEO_URL.toLowerCase())
                return designObject.videoUrl;
            else if (propertyName.toLowerCase() == VideoDesignObjectPropertyName.POSTER_URL.toLowerCase())
                return designObject.posterUrl;
            else if (propertyName.toLowerCase() == VideoDesignObjectPropertyName.IS_PLAYING.toLowerCase())
                return designObject.isPlaying;
            else if (propertyName.toLowerCase() == VideoDesignObjectPropertyName.IS_SEEKING.toLowerCase())
                return designObject.isSeeking;
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {

            if (propertyName.toLowerCase() == VideoDesignObjectPropertyName.VIDEO_URL.toLowerCase()) {
                var video = $("#" + designObject.id).data("controllers.video");

                if (video.isPlaying)
                    video.stop();

                video.video.src = framework.localPath + value;

                designObject.videoUrl = value;

                if (designObject.isAutoPlay)
                    video.play();
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.VIDEO);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function VideoDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Video";

    var BlockType = {
        VIDEO_DESIGN_OBJECT_GET_PROPERTY: "videoDesignObjectGetProperty",
        VIDEO_DESIGN_OBJECT_SET_PROPERTY: "videoDesignObjectSetProperty",
        VIDEO_DESIGN_OBJECT_PLAYER_CONTROL: "videoDesignObjectPlayerControl",
        VIDEO_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT: "videoDesignObjectOnPlayerControlEvent",
        VIDEO_DESIGN_OBJECT_PLAYER_GOTO: "videoDesignObjectPlayerGoto",
        VIDEO_DESIGN_OBJECT_ADD_CLASS: "videoDesignObjectAddClass",
        VIDEO_DESIGN_OBJECT_REMOVE_CLASS: "videoDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.VIDEO_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT) {

                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                if (block.type == BlockType.VIDEO_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT) {

                                    var video = $("#" + designObjectId).data("controllers.video");
                                    if (eventName == "videoFinish")
                                        $(video).on(video.EVENT_VIDEO_ENDED, { "block": block }, onVideoEvent);
                                    else if (eventName == "videoLoaded") 
                                        $(video).on(video.EVENT_VIDEO_LOADED, { "block": block }, onVideoEvent);
                                    else if (eventName == "videoPlaying")
                                        $(video).on(video.EVENT_VIDEO_PLAYING, { "block": block }, onVideoEvent);
                                    else if (eventName == "videoStart")
                                        $(video).on(video.EVENT_VIDEO_PLAY, { "block": block }, onVideoEvent);
                                    else if (eventName == "videoStop")
                                        $(video).on(video.EVENT_VIDEO_PAUSE, { "block": block }, onVideoEvent);
                                    else if (eventName == "videoProgress")
                                        $(video).on(video._EVENT_VIDEO_PROGRESS, { "block": block }, onVideoEvent);
                                } else {
                                    var eventName_ = "";

                                    if (eventName == "mousedown")
                                        eventName_ = Sbt.Actions.down;
                                    else if (eventName == "mouseup")
                                        eventName_ = Sbt.Actions.up;
                                    else if (eventName == "mousemove")
                                        eventName_ = Sbt.Actions.move;
                                    else if (eventName == "click")
                                        eventName_ = Sbt.Actions.click;
                                    else
                                        eventName_ = eventName;

                                    if (eventName_ != "")
                                        $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.VIDEO_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var video = $("#" + id).data("controllers.video");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "isPlaying")
                return manager.returnValue(true, video.isPlaying);
            else if (propertyName == "isSeeking")
                return manager.returnValue(true, video.isSeeking);
            else if (propertyName == "videoUrl")
                return manager.returnValue(true, designObject.videoUrl);
            else if (propertyName == "posterUrl")
                return manager.returnValue(true, designObject.posterUrl);
        }
        else if (block.type == BlockType.VIDEO_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    value = result.value;

                    if (propertyName == "locationX")
                        $designObjectElement.css("left", value + "px");
                    else if (propertyName == "locationY")
                        $designObjectElement.css("top", value + "px");
                    else if (propertyName == "width") {
                        $designObjectElement.css("width", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName == "height") {
                        $designObjectElement.css("height", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName == "isDroppable") {
                        designObject.isDroppable = value;

                        if (value)
                            player.enableDesignObjectAsDroppable(id);
                        else
                            player.disableDesignObjectAsDroppable(id);
                    }
                    else if (propertyName == "isDraggable") {
                        designObject.isDraggable = value;

                        if (value)
                            player.enableDesignObjectAsDraggable(id);
                        else
                            player.disableDesignObjectAsDraggable(id);
                    }
                    else if (propertyName == "visible") {
                        designObject.visible = value;
                        if (value)
                            $designObjectElement.css("display", "block");
                        else
                            $designObjectElement.css("display", "none");
                    }
                    else if (propertyName == "enabled") {
                        designObject.enabled = value;

                        if (value)
                            $designObjectElement.removeAttr("disabled");
                        else
                            $designObjectElement.attr("disabled", "disabled");
                    }
                    else if (propertyName == "alpha") {
                        if (value < 0)
                            value = 0;
                        if (value > 100)
                            value = 100;
                        designObject.alpha = value;
                        value = parseFloat(value / 100);
                        $designObjectElement.css("opacity", value);
                    }
                    else if (propertyName == "className") {
                        var classNames = $designObjectElement.attr("class");
                        classNames = manager.setUserClass(classNames, value);
                        $designObjectElement.attr("class", classNames);
                    }
                    else if (propertyName == "tag")
                        designObject.tag = value;
                    else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                        if (!value)
                            $designObjectElement.css("cursor", "default");
                        else
                            $designObjectElement.css("cursor", "pointer");
                        designObject.useHandCursor = value;
                    }
                    else if (propertyName == "videoUrl") {
                        var $designObjectElement = $("#" + id);
                        var designObject = $designObjectElement.data("designObject");
                        var video = $("#" + id).data("controllers.video");

                        if (video.isPlaying)
                            video.stop();

                        video.video.src = framework.localPath + value;

                        designObject.videoUrl = value;

                        if (designObject.isAutoPlay)
                            video.play();
                    }
                    else if (propertyName == "posterUrl") {
                        video.posterUrl = value;
                    }
                }
            }
        }
        else if (block.type == BlockType.VIDEO_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        }
        else if (block.type == BlockType.VIDEO_DESIGN_OBJECT_PLAYER_CONTROL) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var command = inputDefault.getItem("command").value;

            var video = $("#" + id).data("controllers.video");

            if (command == "play")
                video.play();
            else if (command == "stop")
                video.stop();
            else if (command == "restart") {
                if (!video.isPlaying)
                    video.gotoAndStop(0);
                else
                    video.gotoAndPlay(0);
            }
        }
        else if (block.type == BlockType.VIDEO_DESIGN_OBJECT_PLAYER_GOTO) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var video = $("#" + id).data("controllers.video");
            var command = inputDefault.getItem("command").value;

            var time = 0;
            var inputItemTime = inputDefault.getItem("time");
            if (inputItemTime.block != null) {
                var result = manager.executeBlock(inputItemTime.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    time = parseFloat(result.value);
            }

            if (command == "play")
                video.gotoAndPlay(time);
            else if (command == "stop")
                video.gotoAndStop(time);
        }
        else if (block.type == BlockType.VIDEO_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.VIDEO_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    }

    var onVideoEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.VIDEO_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.VIDEO_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.VIDEO_DESIGN_OBJECT_PLAYER_CONTROL);
    this.blockTypes.push(BlockType.VIDEO_DESIGN_OBJECT_ON_PLAYER_CONTROL_EVENT);
    this.blockTypes.push(BlockType.VIDEO_DESIGN_OBJECT_PLAYER_GOTO);
    this.blockTypes.push(BlockType.VIDEO_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.VIDEO_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function CanvasDesignObjectController(player, playerData) {
    var DesignObjectType = {
        CANVAS: "canvas"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.CANVAS) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<canvas id='" + designObjectElementId + "'></canvas>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.CANVAS) {
            $designObjectElement.attr("width", designObject.width);
            $designObjectElement.attr("height", designObject.height);
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName == "text")
                return $designObjectElement.val();
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.CANVAS);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function CanvasDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Canvas";

    var BlockType = {
        CANVAS_DESIGN_OBJECT_GET_PROPERTY: "canvasDesignObjectGetProperty",
        CANVAS_DESIGN_OBJECT_SET_PROPERTY: "canvasDesignObjectSetProperty",
        CANVAS_DESIGN_OBJECT_CONTEXT: "canvasDesignObjectContext",
        CANVAS_DESIGN_OBJECT_BEGIN_PATH: "canvasDesignObjectBeginPath",
        CANVAS_DESIGN_OBJECT_CLOSE_PATH: "canvasDesignObjectClosePath",
        CANVAS_DESIGN_OBJECT_MOVE_TO: "canvasDesignObjectMoveTo",
        CANVAS_DESIGN_OBJECT_LINE_TO: "canvasDesignObjectLineTo",
        CANVAS_DESIGN_OBJECT_RECT: "canvasDesignObjectRect",
        CANVAS_DESIGN_OBJECT_STROKE_RECT: "canvasDesignObjectStrokeRect",
        CANVAS_DESIGN_OBJECT_FILL_RECT: "canvasDesignObjectFillRect",
        CANVAS_DESIGN_OBJECT_CLEAR_RECT: "canvasDesignObjectClearRect",
        CANVAS_DESIGN_OBJECT_STROKE: "canvasDesignObjectStroke",
        CANVAS_DESIGN_OBJECT_FILL: "canvasDesignObjectFill",
        CANVAS_DESIGN_OBJECT_STROKE_STYLE: "canvasDesignObjectStrokeStyle",
        CANVAS_DESIGN_OBJECT_FILL_STYLE: "canvasDesignObjectFillStyle",
        CANVAS_DESIGN_OBJECT_LINE_WIDTH: "canvasDesignObjectLineWidth",
        CANVAS_DESIGN_OBJECT_LINE_CAP: "canvasDesignObjectLineCap",

        CANVAS_DESIGN_OBJECT_SET_FONT: "canvasDesignObjectSetFont",
        CANVAS_DESIGN_OBJECT_SET_FONT_NAME: "canvasDesignObjectSetFontName",
        CANVAS_DESIGN_OBJECT_SET_FONT_SIZE: "canvasDesignObjectSetFontSize",
        CANVAS_DESIGN_OBJECT_SET_FONT_ATTRIBUTE: "canvasDesignObjectSetFontAttribute",
        CANVAS_DESIGN_OBJECT_FILL_TEXT: "canvasDesignObjectFillText",

        CANVAS_DESIGN_OBJECT_ON_MOUSE_EVENT: "canvasDesignObjectOnMouseEvent",
        CANVAS_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT: "canvasDesignObjectOnDragAndDropEvent",
        CANVAS_DESIGN_OBJECT_ON_DRAG_EVENT: "canvasDesignObjectOnDragEvent",

        CANVAS_DESIGN_OBJECT_BEZIER_CURVE_TO: "canvasDesignObjectBezierCurveTo",
        CANVAS_DESIGN_OBJECT_QUADRATIC_CURVE_TO: "canvasDesignObjectQuadraticCurveTo",
        CANVAS_DESIGN_OBJECT_ARC: "canvasDesignObjectArc",
        CANVAS_DESIGN_OBJECT_ARC_TO: "canvasDesignObjectArcTo",
        CANVAS_DESIGN_OBJECT_IS_POINT_IN_PATH: "canvasDesignObjectIsPointInPath",

        CANVAS_DESIGN_OBJECT_GET_DRAG_OBJECT: "canvasDesignObjectGetDragObject",
        CANVAS_DESIGN_OBJECT_GET_DRAG_OBJECT_ID: "canvasDesignObjectGetDragObjectId",
        CANVAS_DESIGN_OBJECT_GET_DROP_OBJECT: "canvasDesignObjectGetDropObject",
        CANVAS_DESIGN_OBJECT_GET_DROP_OBJECT_ID: "canvasDesignObjectGetDropObjectId",

        CANVAS_DESIGN_OBJECT_ADD_CLASS: "canvasDesignObjectAddClass",
        CANVAS_DESIGN_OBJECT_REMOVE_CLASS: "canvasDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                        }
                        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
                            var inputDefault = block.getInput("default");
                            var id = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + id);

                            var dropProxyObject = player.createDropHandlerForDesignObject(id);
                            $(dropProxyObject).on("drop", { "block": block }, onDrop);
                        }
                        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ON_DRAG_EVENT) {
                            var inputDefault = block.getInput("default");
                            var designObjectId = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + designObjectId);
                            var eventName = inputDefault.getItem("eventName").value;

                            if (designObjectId != "" && eventName != "") {
                                player.createDragMembersForDesignObject(designObjectId);
                                var dragHandler = $designObjectElement.data("controllers.dragHandler");
                                $(dragHandler).on(eventName, { "block": block }, onDrag);
                            }
                        }
                    }
                }
            }
        }
    }

    var onDrop = function (e, dropObj, dragObj) {
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj);
        eventVariables.add("dropObject", dropObj.designObject);

        var block = e.data.block;
        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onDrag = function (e, dragObj) {
        var block = e.data.block;
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    var onBlockEvent = function (e) {
        var block = e.data.block;

        var pageX = e.Sbt.touches[0].pageX;
        var pageY = e.Sbt.touches[0].pageY;
        var offset = Sbt.utilities.Dom.getOffset($(e.currentTarget));
        var posLeft = pageX - offset.left - $(window).scrollLeft();
        var posTop = pageY - offset.top - $(window).scrollTop();

        var eventVariables = manager.createVariables();
        eventVariables.add("x", posLeft);
        eventVariables.add("y", posTop);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            scopeVariables_.push(manager.createVariable("x", eventVariables.getValue("x")));
            scopeVariables_.push(manager.createVariable("y", eventVariables.getValue("y")));

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            var dropObject = eventVariables.getValue("dropObject");

            scopeVariables_.push(manager.createVariable("dragObject", dragObject));
            scopeVariables_.push(manager.createVariable("dropObject", dropObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ON_DRAG_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            scopeVariables_.push(manager.createVariable("dragObject", dragObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (designObject != null) {
                if (propertyName == "locationX")
                    return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
                else if (propertyName == "locationY")
                    return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
                else if (propertyName == "width")
                    return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
                else if (propertyName == "height")
                    return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
                else if (propertyName == "rotation")
                    return manager.returnValue(true, designObject.rotation);
                else if (propertyName == "isDroppable")
                    return manager.returnValue(true, designObject.isDroppable);
                else if (propertyName == "isDraggable")
                    return manager.returnValue(true, designObject.isDraggable);
                else if (propertyName == "visible")
                    return manager.returnValue(true, designObject.visible);
                else if (propertyName == "enabled")
                    return manager.returnValue(true, designObject.enabled);
                else if (propertyName == "alpha")
                    return manager.returnValue(true, designObject.alpha);
                else if (propertyName == "className")
                    return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
                else if (propertyName == "tag")
                    return manager.returnValue(true, designObject.tag);
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                    return manager.returnValue(true, designObject.useHandCursor);
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObjectElement = $designObjectElement[0];
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "rotation") {
                    designObject.rotation = value;
                    DesignObjectHelper.applyRotation($designObjectElement, designObject);
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_CONTEXT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);

            var context = designObjectElement[0].getContext('2d');
            context.textBaseline = "top";
            context.fontName = "";
            context.fontSize = "";
            context.fontAttribute = "";

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            
            var scopeVariable = {};
            scopeVariable.name = "context";
            scopeVariable.value = context;
            scopeVariables_.push(scopeVariable);

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_BEGIN_PATH) {
            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.beginPath();
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_CLOSE_PATH) {
            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.closePath();
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_STROKE) {
            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.stroke();
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_STROKE_STYLE) {
            var inputDefault = block.getInput("default");
            var context = scopeVariables.getVariable("context").value;
            if (context != null && inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    context.strokeStyle = result.value;
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_FILL_STYLE) {
            var inputDefault = block.getInput("default");
            var context = scopeVariables.getVariable("context").value;
            if (context != null && inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    context.fillStyle = result.value;
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_LINE_WIDTH) {
            var inputDefault = block.getInput("default");
            var context = scopeVariables.getVariable("context").value;
            if (context != null && inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    context.lineWidth = result.value;
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_LINE_CAP) {
            var inputDefault = block.getInput("default");
            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.lineCap = inputDefault.getItem("type").value;
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_SET_FONT) {
            var context = scopeVariables.getVariable("context").value;

            var inputName = block.getInput("fontName");
            if (inputName.block != null) {
                var result = manager.executeBlock(inputName.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue)
                    context.fontName = result.value;
            }

            var inputSize = block.getInput("fontSize");
            if (inputSize.block != null) {
                var result = manager.executeBlock(inputSize.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue)
                    context.fontSize = parseInt(result.value);
            }

            var inputAttribute = block.getInput("fontAttribute");
            var attribute = "";
            if (inputAttribute.block != null) {
                var result = manager.executeBlock(inputAttribute.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue) {
                    context.fontAttribute = "";
                    for (var key in result.value) {
                        if (result.value[key])
                            context.fontAttribute += key + " ";
                    }
                }

            }

            if (context != null)
                context.font = context.fontAttribute + " " + context.fontSize + "px " + context.fontName;
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_SET_FONT_NAME) {
            var context = scopeVariables.getVariable("context").value;

            var inputName = block.getInput("fontName");
            if (inputName.block != null) {
                var result = manager.executeBlock(inputName.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue)
                    context.fontName = result.value;
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_SET_FONT_SIZE) {
            var context = scopeVariables.getVariable("context").value;

            var inputName = block.getInput("fontSize");
            if (inputName.block != null) {
                var result = manager.executeBlock(inputName.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue)
                    context.fontSize = result.value;
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_SET_FONT_ATTRIBUTE) {
            var context = scopeVariables.getVariable("context").value;

            var inputName = block.getInput("fontAttribute");
            if (inputName.block != null) {
                var result = manager.executeBlock(inputName.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue) {
                    context.fontAttribute = "";
                    for (var key in result.value) {
                        if (result.value[key])
                            context.fontAttribute += key + " ";
                    }
                }

            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_FILL_TEXT) {
            var inputValue = block.getInput("default");
            var context = scopeVariables.getVariable("context").value;

            var text = "";
            var inputItemValueX = inputValue.getItem("text");
            if (inputItemValueX.block != null) {
                var result = manager.executeBlock(inputItemValueX.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue)
                    text = result.value;
            }

            var x = 0;
            var inputItemValueY = inputValue.getItem("x");
            if (inputItemValueY.block != null) {
                var result = manager.executeBlock(inputItemValueY.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue)
                    x = result.value;
            }

            var y = "";
            var inputItemValueY = inputValue.getItem("y");
            if (inputItemValueY.block != null) {
                var result = manager.executeBlock(inputItemValueY.block, scopeVariables, false, parameters);
                if (result != null && result.hasReturnValue)
                    y = result.value;
            }

            context.font = context.fontAttribute + " " + context.fontSize + "px " + context.fontName;
            context.fillText(text, x, y);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_MOVE_TO) {
            var inputX = block.getInput("x");
            var x = -1;
            if (inputX.block != null) {
                var result = manager.executeBlock(inputX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = parseInt(result.value);
            }

            var inputY = block.getInput("y");
            var y = -1;
            if (inputY.block != null) {
                var result = manager.executeBlock(inputY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = parseInt(result.value);
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.moveTo(x, y);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_LINE_TO) {
            var inputX = block.getInput("x");
            var x = -1;
            if (inputX.block != null) {
                var result = manager.executeBlock(inputX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = parseInt(result.value);
            }

            var inputY = block.getInput("y");
            var y = -1;
            if (inputY.block != null) {
                var result = manager.executeBlock(inputY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = parseInt(result.value);
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.lineTo(x, y);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_RECT) {
            var inputValue = block.getInput("default");

            var x = 0;
            var inputItemValueX = inputValue.getItem("x");
            if (inputItemValueX.block != null) {
                var result = manager.executeBlock(inputItemValueX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = result.value;
            }

            var y = 0;
            var inputItemValueY = inputValue.getItem("y");
            if (inputItemValueY.block != null) {
                var result = manager.executeBlock(inputItemValueY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = result.value;
            }

            var width = 0;
            var inputItemWidth = inputValue.getItem("width");
            if (inputItemWidth.block != null) {
                var result = manager.executeBlock(inputItemWidth.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    width = result.value;
            }

            var height = 0;
            var inputItemHeight = inputValue.getItem("height");
            if (inputItemHeight.block != null) {
                var result = manager.executeBlock(inputItemHeight.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    height = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.rect(x, y, width, height);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_STROKE_RECT) {
            var inputValue = block.getInput("default");

            var x = 0;
            var inputItemValueX = inputValue.getItem("x");
            if (inputItemValueX.block != null) {
                var result = manager.executeBlock(inputItemValueX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = result.value;
            }

            var y = 0;
            var inputItemValueY = inputValue.getItem("y");
            if (inputItemValueY.block != null) {
                var result = manager.executeBlock(inputItemValueY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = result.value;
            }

            var width = 0;
            var inputItemWidth = inputValue.getItem("width");
            if (inputItemWidth.block != null) {
                var result = manager.executeBlock(inputItemWidth.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    width = result.value;
            }

            var height = 0;
            var inputItemHeight = inputValue.getItem("height");
            if (inputItemHeight.block != null) {
                var result = manager.executeBlock(inputItemHeight.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    height = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.strokeRect(x, y, width, height);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_FILL_RECT) {
            var inputValue = block.getInput("default");

            var x = 0;
            var inputItemValueX = inputValue.getItem("x");
            if (inputItemValueX.block != null) {
                var result = manager.executeBlock(inputItemValueX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = result.value;
            }

            var y = 0;
            var inputItemValueY = inputValue.getItem("y");
            if (inputItemValueY.block != null) {
                var result = manager.executeBlock(inputItemValueY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = result.value;
            }

            var width = 0;
            var inputItemWidth = inputValue.getItem("width");
            if (inputItemWidth.block != null) {
                var result = manager.executeBlock(inputItemWidth.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    width = result.value;
            }

            var height = 0;
            var inputItemHeight = inputValue.getItem("height");
            if (inputItemHeight.block != null) {
                var result = manager.executeBlock(inputItemHeight.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    height = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.fillRect(x, y, width, height);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_CLEAR_RECT) {
            var inputValue = block.getInput("default");

            var x = 0;
            var inputItemValueX = inputValue.getItem("x");
            if (inputItemValueX.block != null) {
                var result = manager.executeBlock(inputItemValueX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = result.value;
            }

            var y = 0;
            var inputItemValueY = inputValue.getItem("y");
            if (inputItemValueY.block != null) {
                var result = manager.executeBlock(inputItemValueY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = result.value;
            }

            var width = 0;
            var inputItemWidth = inputValue.getItem("width");
            if (inputItemWidth.block != null) {
                var result = manager.executeBlock(inputItemWidth.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    width = result.value;
            }

            var height = 0;
            var inputItemHeight = inputValue.getItem("height");
            if (inputItemHeight.block != null) {
                var result = manager.executeBlock(inputItemHeight.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    height = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.clearRect(x, y, width, height);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_FILL) {
            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.fill();
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_BEZIER_CURVE_TO) {
            // control point 1 x
            var cp1x = 0;
            var inputValueCP1X = block.getInput("controlPoint1X");
            if (inputValueCP1X.block != null) {
                var result = manager.executeBlock(inputValueCP1X.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cp1x = result.value;
            }

            // control point 1 y
            var cp1y = 0;
            var inputValueCP1Y = block.getInput("controlPoint1Y");
            if (inputValueCP1Y.block != null) {
                var result = manager.executeBlock(inputValueCP1Y.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cp1y = result.value;
            }

            // control point 2 x
            var cp2x = 0;
            var inputValueCP2X = block.getInput("controlPoint2X");
            if (inputValueCP2X.block != null) {
                var result = manager.executeBlock(inputValueCP2X.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cp2x = result.value;
            }

            // control point 2 y
            var cp2y = 0;
            var inputValueCP2Y = block.getInput("controlPoint2Y");
            if (inputValueCP2Y.block != null) {
                var result = manager.executeBlock(inputValueCP2Y.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cp2y = result.value;
            }

            // ending point 2 x
            var epx = 0;
            var inputValueEPX = block.getInput("endingPointX");
            if (inputValueEPX.block != null) {
                var result = manager.executeBlock(inputValueEPX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    epx = result.value;
            }

            // ending point 2 y
            var epy = 0;
            var inputValueEPY = block.getInput("endingPointY");
            if (inputValueEPY.block != null) {
                var result = manager.executeBlock(inputValueEPY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    epy = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, epx, epy);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_QUADRATIC_CURVE_TO) {
            var inputValue = block.getInput("default");

            // control point x
            var cpx = 0;
            var inputValueCPX = block.getInput("controlPointX");
            if (inputValueCPX.block != null) {
                var result = manager.executeBlock(inputValueCPX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cpx = result.value;
            }

            // control point y
            var cpy = 0;
            var inputValueCPY = block.getInput("controlPointY");
            if (inputValueCPY.block != null) {
                var result = manager.executeBlock(inputValueCPY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cpy = result.value;
            }

            // ending point 2 x
            var epx = 0;
            var inputValueEPX = block.getInput("endingPointX");
            if (inputValueEPX.block != null) {
                var result = manager.executeBlock(inputValueEPX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    epx = result.value;
            }

            // ending point 2 y
            var epy = 0;
            var inputValueEPY = block.getInput("endingPointY");
            if (inputValueEPY.block != null) {
                var result = manager.executeBlock(inputValueEPY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    epy = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.quadraticCurveTo(cpx, cpy, epx, epy);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ARC) {
            var inputValue = block.getInput("default");

            // center point x
            var cpx = 0;
            var inputValueCPX = block.getInput("circleCenterPointX");
            if (inputValueCPX.block != null) {
                var result = manager.executeBlock(inputValueCPX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cpx = result.value;
            }

            // center point y
            var cpy = 0;
            var inputValueCPY = block.getInput("circleCenterPointY");
            if (inputValueCPY.block != null) {
                var result = manager.executeBlock(inputValueCPY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    cpy = result.value;
            }

            // radius
            var radius = 0;
            var inputValueRadius = block.getInput("circleRadius");
            if (inputValueRadius.block != null) {
                var result = manager.executeBlock(inputValueRadius.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    radius = result.value;
            }

            // starting angle
            var startingAngle = 0;
            var inputValueStartingAngle = block.getInput("startingAngle");
            if (inputValueStartingAngle.block != null) {
                var result = manager.executeBlock(inputValueStartingAngle.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    startingAngle = result.value;
            }

            // ending angle
            var endingAngle = 0;
            var inputValueEndingAngle = block.getInput("endingAngle");
            if (inputValueEndingAngle.block != null) {
                var result = manager.executeBlock(inputValueEndingAngle.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    endingAngle = result.value;
            }

            // counterClockwise
            var counterClockwise = 0;
            var inputValueCounterClockwise = block.getInput("counterclockwise");
            if (inputValueCounterClockwise.block != null) {
                var result = manager.executeBlock(inputValueCounterClockwise.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    counterClockwise = result.value;
            }

            if (scopeVariables != undefined) {
                var context = scopeVariables.getVariable("context").value;
                if (context != null)
                    context.arc(cpx, cpy, radius, startingAngle, endingAngle, counterClockwise);
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ARC_TO) {
            var inputValue = block.getInput("default");

            // x1
            var x1 = 0;
            var inputValueX1 = block.getInput("firstTangentX");
            if (inputValueX1.block != null) {
                var result = manager.executeBlock(inputValueX1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x1 = result.value;
            }

            // y1
            var y1 = 0;
            var inputValueY1 = block.getInput("firstTangentY");
            if (inputValueY1.block != null) {
                var result = manager.executeBlock(inputValueY1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y1 = result.value;
            }

            // x2
            var x2 = 0;
            var inputValueX2 = block.getInput("secondTangentX");
            if (inputValueX2.block != null) {
                var result = manager.executeBlock(inputValueX2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x2 = result.value;
            }

            // y2
            var y2 = 0;
            var inputValueY2 = block.getInput("secondTangentY");
            if (inputValueY2.block != null) {
                var result = manager.executeBlock(inputValueY2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y2 = result.value;
            }

            // radius
            var radius = 0;
            var inputValueRadius = block.getInput("radius");
            if (inputValueRadius.block != null) {
                var result = manager.executeBlock(inputValueRadius.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    radius = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.arcTo(x1, y1, x2, y2, radius);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_IS_POINT_IN_PATH) {
            var inputValue = block.getInput("default");

            // x
            var x = 0;
            var inputValueX = block.getInput("x");
            if (inputValueX.block != null) {
                var result = manager.executeBlock(inputValueX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = result.value;
            }

            // y
            var y = 0;
            var inputValueY = block.getInput("y");
            if (inputValueY.block != null) {
                var result = manager.executeBlock(inputValueY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = result.value;
            }

            var context = scopeVariables.getVariable("context").value;
            if (context != null)
                context.isPointInPath(x, y);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_GET_DRAG_OBJECT) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_GET_DRAG_OBJECT_ID) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject.id);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_GET_DROP_OBJECT) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_GET_DROP_OBJECT_ID) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject.id);
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    $designObjectElement.addClass(result.value);
            }
        }
        else if (block.type == BlockType.CANVAS_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }
        return manager.returnValue(false);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_CONTEXT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_BEGIN_PATH);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_CLOSE_PATH);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_MOVE_TO);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_LINE_TO);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_RECT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_STROKE_RECT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_FILL_RECT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_CLEAR_RECT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_STROKE);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_FILL);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_STROKE_STYLE);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_FILL_STYLE);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_LINE_WIDTH);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_LINE_CAP);

    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_SET_FONT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_SET_FONT_NAME);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_SET_FONT_SIZE);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_SET_FONT_ATTRIBUTE);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_FILL_TEXT);

    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_ON_MOUSE_EVENT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_ON_DRAG_EVENT);

    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_BEZIER_CURVE_TO);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_QUADRATIC_CURVE_TO);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_ARC);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_ARC_TO);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_IS_POINT_IN_PATH);

    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_GET_DRAG_OBJECT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_GET_DRAG_OBJECT_ID);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_GET_DROP_OBJECT);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_GET_DROP_OBJECT_ID);

    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.CANVAS_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function ContentDesignObjectController(player, playerData) {
    var DesignObjectType = {
        CONTENT: "content"
    };

    var ContentDesignObejctPropertyName = {
        TEXT: "text"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.CONTENT) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'><span id='" + designObjectElementId + "_span' style='position: absolute'></span></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.CONTENT) {
            var designObjectSpanElementId = designObject.id == '' ? designObject.uniqueId + "_span" : designObject.id + "_span";
            var $designObjectSpanElement = $("#" + designObjectSpanElementId);

            $designObjectSpanElement.html(designObject.text);

            if (designObject.clippingBehavior == "clipped") {
                $designObjectElement.css("overflow", "hidden");
                $designObjectElement.css("-webkit-transform", "translate3d(0, 0, 0)");
                $designObjectElement.css("transform", "translate3d(0, 0, 0)");
            }

            if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                for (var h = 0; h < designObject.designObjects.length; h++) {
                    var subDesignObject = designObject.designObjects[h];
                    player.initializeDesignObject(designObjectUniqueIds, $designObjectElement, true, layer, keyframe, subDesignObject);
                }
            }
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);

        if (designObject.designObjects != null && designObject.designObjects.length > 0) {
            for (var h = 0; h < designObject.designObjects.length; h++) {
                var subDesignObject = designObject.designObjects[h];
                var subDesignObjectElementId = subDesignObject.id == "" ? subDesignObject.uniqueId : subDesignObject.id;
                var $subDesignObjectElement = $("#" + subDesignObjectElementId);
                var $subDesignObjectController = $subDesignObjectElement.data("controllers.designObject");

                var nextKeyframeSubDesignObject = player.getDesignObjectForKeyframeById(nextKeyframe, subDesignObject.uniqueId);
                $subDesignObjectController.frameTween(layer, $subDesignObjectElement, subDesignObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeSubDesignObject);
            }
        }
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == ContentDesignObejctPropertyName.TEXT.toLowerCase())
                return $designObjectElement.val();
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == ContentDesignObejctPropertyName.TEXT.toLowerCase()) {
                designObject.text = value;
                $designObjectSpanElement.html(value);
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.CONTENT);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function ContentDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Content";

    var BlockType = {
        CONTENT_DESIGN_OBJECT_GET_PROPERTY: "contentDesignObjectGetProperty",
        CONTENT_DESIGN_OBJECT_SET_PROPERTY: "contentDesignObjectSetProperty",
        CONTENT_DESIGN_OBJECT_ON_MOUSE_EVENT: "contentDesignObjectOnMouseEvent",
        CONTENT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT: "contentDesignObjectOnDragAndDropEvent",
        CONTENT_DESIGN_OBJECT_ON_DRAG_EVENT: "contentDesignObjectOnDragEvent",
        CONTENT_DESIGN_OBJECT_GET_DRAG_OBJECT: "contentDesignObjectGetDragObject",
        CONTENT_DESIGN_OBJECT_GET_DRAG_OBJECT_ID: "contentDesignObjectGetDragObjectId",
        CONTENT_DESIGN_OBJECT_GET_DROP_OBJECT: "contentDesignObjectGetDropObject",
        CONTENT_DESIGN_OBJECT_GET_DROP_OBJECT_ID: "contentDesignObjectGetDropObjectId",
        CONTENT_DESIGN_OBJECT_ADD_CLASS: "contentDesignObjectAddClass",
        CONTENT_DESIGN_OBJECT_REMOVE_CLASS: "contentDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    };

    this.initialize = function () {
        initializeEvents();
    };

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.CONTENT_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, {"block": block}, onBlockEvent);
                            }
                        }
                        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
                            var inputDefault = block.getInput("default");
                            var id = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + id);

                            var dropProxyObject = player.createDropHandlerForDesignObject(id);
                            $(dropProxyObject).on("drop", {"block": block}, onDrop);
                        }
                        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_ON_DRAG_EVENT) {
                            var inputDefault = block.getInput("default");
                            var designObjectId = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + designObjectId);
                            var eventName = inputDefault.getItem("eventName").value;

                            if (designObjectId != "" && eventName != "") {
                                player.createDragMembersForDesignObject(designObjectId);
                                var dragHandler = $designObjectElement.data("controllers.dragHandler");
                                $(dragHandler).on(eventName, { "block": block }, onDrag);
                            }
                        }
                    }
                }
            }
        }
    };

    var onDrop = function (e, dropObj, dragObj) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj);
        eventVariables.add("dropObject", dropObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    var onDrag = function (e, dragObj) {
        var block = e.data.block;
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    var onBlockEvent = function (e) {
        var block = e.data.block;

        var pageX = e.Sbt.touches[0].pageX;
        var pageY = e.Sbt.touches[0].pageY;
        var offset = Sbt.utilities.Dom.getOffset($(e.currentTarget));
        var posLeft = pageX - offset.left - $(window).scrollLeft();
        var posTop = pageY - offset.top - $(window).scrollTop();

        var eventVariables = manager.createVariables();
        eventVariables.add("x", posLeft);
        eventVariables.add("y", posTop);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    this.postInitialize = function () {

    };

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.CONTENT_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "value") {
                if (block.type == BlockType.SLIDER_DESIGN_OBJECT_GET_PROPERTY) {
                    var slider = $designObjectElement.data("controllers.slider");
                    return manager.returnValue(true, slider.value);
                }
                else
                    return manager.returnValue(true, designObject.value);
            }
            else if (propertyName == "text") {
                return manager.returnValue(true, designObject.text);
            }
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "checked") {
                return manager.returnValue(true, $designObjectElement.attr("checked") != undefined);
            }
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var $designObjectSpanElement = $("#" + id + "_span");
            var designObjectElement = $designObjectElement[0];
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    value = result.value;

                    if (propertyName == "locationX")
                        $designObjectElement.css("left", value + "px");
                    else if (propertyName == "locationY")
                        $designObjectElement.css("top", value + "px");
                    else if (propertyName == "width") {
                        $designObjectElement.css("width", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName == "height") {
                        $designObjectElement.css("height", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName == "rotation") {
                        designObject.rotation = value;
                        DesignObjectHelper.applyRotation($designObjectElement, designObject);
                    }
                    else if (propertyName == "isDroppable") {
                        designObject.isDroppable = value;

                        if (value)
                            player.enableDesignObjectAsDroppable(id);
                        else
                            player.disableDesignObjectAsDroppable(id);
                    }
                    else if (propertyName == "isDraggable") {
                        designObject.isDraggable = value;

                        if (value)
                            player.enableDesignObjectAsDraggable(id);
                        else
                            player.disableDesignObjectAsDraggable(id);
                    }
                    else if (propertyName == "visible") {
                        designObject.visible = value;
                        if (value)
                            $designObjectElement.css("display", "block");
                        else
                            $designObjectElement.css("display", "none");
                    }
                    else if (propertyName == "enabled") {
                        designObject.enabled = value;

                        if (value)
                            $designObjectElement.removeAttr("disabled");
                        else
                            $designObjectElement.attr("disabled", "disabled");
                    }
                    else if (propertyName == "alpha") {
                        if (value < 0)
                            value = 0;
                        if (value > 100)
                            value = 100;
                        designObject.alpha = value;
                        value = parseFloat(value / 100);
                        $designObjectElement.css("opacity", value);
                    }
                    else if (propertyName == "className") {
                        var classNames = $designObjectElement.attr("class");
                        classNames = manager.setUserClass(classNames, value);
                        $designObjectElement.attr("class", classNames);
                    }
                    else if (propertyName == "tag")
                        designObject.tag = value;
                    else if (propertyName == "text") {
                        designObject.text = value;
                        $designObjectSpanElement.html(value);
                    }
                    else if (propertyName == "value") {
                        $designObjectElement.html(value);
                        designObject.value = value;
                    }
                    else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                        if (!value)
                            $designObjectElement.css("cursor", "default");
                        else
                            $designObjectElement.css("cursor", "pointer");

                        designObject.useHandCursor = value;
                    }
                    else if (propertyName == "checked") {
                        if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_SET_PROPERTY) {
                            designObject.checked = value;

                            if (value)
                                $designObjectElement.attr("checked", "checked");
                            else
                                designOBjectElement.removeAttr("checked");
                        }
                    }
                }
            }
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);
            scopeVariables_.push(manager.createVariable("x", eventVariables.getValue("x")));
            scopeVariables_.push(manager.createVariable("y", eventVariables.getValue("y")));

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
            }
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            var dropObject = eventVariables.getValue("dropObject");

            scopeVariables_.push(manager.createVariable("dragObject", dragObject));
            scopeVariables_.push(manager.createVariable("dropObject", dropObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_ON_DRAG_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            scopeVariables_.push(manager.createVariable("dragObject", dragObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_GET_DRAG_OBJECT) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject);
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_GET_DRAG_OBJECT_ID) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject.id);
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_GET_DROP_OBJECT) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject);
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_GET_DROP_OBJECT_ID) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject.id);
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.CONTENT_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    };

    // constructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_ON_MOUSE_EVENT);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_ON_DRAG_EVENT);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_GET_DRAG_OBJECT);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_GET_DRAG_OBJECT_ID);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_GET_DROP_OBJECT);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_GET_DROP_OBJECT_ID);

    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.CONTENT_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function HighlightDesignObjectController() {
    var DesignObjectType = {
        HIGHLIGHT: "highlight"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.HIGHLIGHT) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.HIGHLIGHT) {
            $designObjectElement.css("pointer-events", "none");
            $designObjectElement.css("display", "none");
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName == "text")
                return $designObjectElement.val();
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.HIGHLIGHT);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function HighlightDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Highlight";

    var BlockType = {
        HIGHLIGHT_DESIGN_OBJECT_SHOW: "highlightDesignObjectShow",
        HIGHLIGHT_DESIGN_OBJECT_HIDE: "highlightDesignObjectHide",
        HIGHLIGHT_DESIGN_OBJECT_GET_PROPERTY: "highlightDesignObjectGetProperty",
        HIGHLIGHT_DESIGN_OBJECT_SET_PROPERTY: "highlightDesignObjectSetProperty",
        HIDE_ALL_HIGHLIGHTS: "hideAllHighlights"
    };

    var highlights = null;

    this.preInitialize = function () {

    }

    this.initialize = function () {
        if (highlightsJSON != null) {
            for (key in highlightsJSON) {
                highlightsJSON[key][0].container = undefined;
            }
            manager.highlights = new Sbt.Highlights(highlightsJSON);
        }
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.HIGHLIGHT_DESIGN_OBJECT_SHOW) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;

            if (manager.highlights != null) {
                manager.highlights[designObjectId].Start();
            }
        }
        else if (block.type == BlockType.HIGHLIGHT_DESIGN_OBJECT_HIDE) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;

            if (manager.highlights != null)
                manager.highlights[designObjectId].Stop();
        }
        else if (block.type == BlockType.HIDE_ALL_HIGHLIGHTS) {
            if (manager.highlights != null)
                manager.highlights.Stop();
        }
        else if (block.type == BlockType.HIGHLIGHT_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;
            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var highlight = manager.highlights[id][0];
            var locationX = parseInt(highlight.position[0]);
            var locationY = parseInt(highlight.position[1]);

            if (typeof designObject["parentId"] !== "undefined") {
                var parentId = designObject["parentId"];
                var $parentObjectElement = $("#" + parentId);
                var parentDesignObject = $parentObjectElement.data("designObject");
                locationX -= parentDesignObject.x;
                locationY -= parentDesignObject.y;
            }

            switch (highlight.type)
            {
                case Sbt.Highlights.Type.DRAG:
                    locationX += 24;
                    locationY += 24;
                    break;
                case Sbt.Highlights.Type.ROUNDEDBUTTON:
                    locationX += 15;
                    locationY += 15;
                    break;
                case Sbt.Highlights.Type.SWIPE:
                    break;
                case Sbt.Highlights.Type.INPUTTEXT:
                    locationX += 15;
                    locationY += 15;
                    break;
                case Sbt.Highlights.Type.RECTANGLEBUTTON:
                    locationX += 15;
                    locationY += 15;
                    break;
                case Sbt.Highlights.Type.STEP:
                    break;
                case Sbt.Highlights.Type.POINT:
                    locationX += 30;
                    locationY += 30;
                    break;
                case Sbt.Highlights.Type.CUSTOM:
                    break;
                default:
                    break;
            }

            if (propertyName == "locationX"){
                //return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
                return manager.returnValue(true, locationX);
            }
            else if (propertyName == "locationY") {
                //return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
                return manager.returnValue(true, locationY);
            }
        }
        else if (block.type == BlockType.HIGHLIGHT_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObjectElement = $designObjectElement[0];
            var designObject = $designObjectElement.data("designObject");
            var highlight = manager.highlights[id][0];

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                var location = value;

                switch (highlight.type) {
                    case Sbt.Highlights.Type.DRAG:
                        location -= 24;
                        break;
                    case Sbt.Highlights.Type.ROUNDEDBUTTON:
                        location -= 15;
                        break;
                    case Sbt.Highlights.Type.SWIPE:
                        break;
                    case Sbt.Highlights.Type.INPUTTEXT:
                        location -= 15;
                        break;
                    case Sbt.Highlights.Type.RECTANGLEBUTTON:
                        location -= 15;
                        break;
                    case Sbt.Highlights.Type.STEP:
                        break;
                    case Sbt.Highlights.Type.POINT:
                        location -= 30;
                        break;
                    case Sbt.Highlights.Type.CUSTOM:
                        break;
                    default:
                        break;
                }

                var position = manager.highlights[id][0].position
                if (propertyName == "locationX") {
                    $designObjectElement.css("left", value + "px");
                    manager.highlights[id][0].position = [location, position[1]]
                }
                else if (propertyName == "locationY") {
                    $designObjectElement.css("top", value + "px");
                    manager.highlights[id][0].position = [position[0], location]
                }
            }
        }

        return manager.returnValue(false);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.HIGHLIGHT_DESIGN_OBJECT_SHOW);
    this.blockTypes.push(BlockType.HIGHLIGHT_DESIGN_OBJECT_HIDE);
    this.blockTypes.push(BlockType.HIGHLIGHT_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.HIGHLIGHT_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.HIDE_ALL_HIGHLIGHTS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function ImageButtonDesignObjectController(player, playerData) {
    var DesignObjectType = {
        IMAGE_BUTTON: "imageButton"
    };

    var ImageButtonDesignObjectPropertyName = {
        TEXT_ALIGN: "textAlign",
        TEXT_MARGIN: "textMargin"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.IMAGE_BUTTON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            return $(designObjectElementText);
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.IMAGE_BUTTON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

            var imageButton = new ImageButton($designObjectElement[0],
                designObjectElementId,
                designObject.statesImageUrl,
                designObject.statesImageWidth,
                designObject.statesImageHeight,
                designObject.stateSize.width,
                designObject.stateSize.height,
                designObject.enabled,
                designObject.selected);
            imageButton.textAlign = designObject.textAlign;
            imageButton.textMargin = designObject.textMargin;
            imageButton.text = designObject.text;
            imageButton.stateBehavior = designObject.stateBehavior;
            imageButton.interactionBehavior = designObject.interactionBehavior;
            imageButton.enabled = designObject.enabled;
            imageButton.refresh();

            $designObjectElement.data("controllers.imageButton", imageButton);
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            var imageButton = $designObjectElement.data("controllers.imageButton");

            if (propertyName.toLowerCase() == ImageButtonDesignObjectPropertyName.TEXT_ALIGN.toLowerCase())
                return imageButton.textAlign;
            else if (propertyName.toLowerCase() == ImageButtonDesignObjectPropertyName.TEXT_MARGIN.toLowerCase())
                return imageButton.textMargin;
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            var imageButton = $designObjectElement.data("controllers.imageButton");

            if (propertyName.toLowerCase() == ImageButtonDesignObjectPropertyName.TEXT_ALIGN.toLowerCase()) {
                if (imageButton != null) {
                    imageButton.textAlign = value;
                    imageButton.refresh();
                }
            }
            else if (propertyName.toLowerCase() == ImageButtonDesignObjectPropertyName.TEXT_MARGIN.toLowerCase()) {
                if (imageButton != null) {
                    imageButton.textMargin = value;
                    imageButton.refresh();
                }
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.IMAGE_BUTTON);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function ImageButtonDesignObjectBlocksController(manager, player, playerData) {
    this.name = "ImageButton";

    var BlockType = {
        IMAGE_BUTTON_DESIGN_OBJECT_GET_PROPERTY: "imageButtonDesignObjectGetProperty",
        IMAGE_BUTTON_DESIGN_OBJECT_SET_PROPERTY: "imageButtonDesignObjectSetProperty",
        IMAGE_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT: "imageButtonDesignObjectOnMouseEvent",
        IMAGE_BUTTON_DESIGN_OBJECT_ON_DRAG_DROP_EVENT: "imageButtonDesignObjectOnDragDropEvent",
        IMAGE_BUTTON_DESIGN_OBJECT_TEXT_ALIGN: "imageButtonDesignObjectTextAlign",
        IMAGE_BUTTON_DESIGN_OBJECT_ADD_CLASS : "imageButtonDesignObjectAddClass",
        IMAGE_BUTTON_DESIGN_OBJECT_REMOVE_CLASS : "imageButtonDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, {"block": block}, onBlockEvent);
                            }
                        }
                        else if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_ON_DRAG_DROP_EVENT) {
                            var inputDefault = block.getInput("default");
                            var id = inputDefault.getItem("id").value;
                            var designObject = $("#" + id);
                            var dropHandler = designObject.data("controllers.dropHandler");
                            $(dropHandler).on("drop", {"block": block}, onDrop);
                        }
                    }
                }
            }
        }
    }

    var onDrop = function (e, dropObj, dragObj) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj);
        eventVariables.add("dropObject", dropObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onSequencerFinished = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    };

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        }
        else if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
            var scopeVariables_ = cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            var dropObject = eventVariables.getValue("dropObject");

            scopeVariables_.push(createVariable("dragObject", dragObject));
            scopeVariables_.push(createVariable("dropObject", dropObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "text")
                return manager.returnValue(true, designObject.text);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "textAlign") {
                var imageButton = $designObjectElement.data("controllers.imageButton");
                return manager.returnValue(true, imageButton.textAlign);

            } else if (propertyName == "textMargin") {
                var imageButton = $designObjectElement.data("controllers.imageButton");
                return manager.returnValue(true, imageButton.textMargin);
            }
        }
        else if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "rotation") {
                    designObject.rotation = value;
                    DesignObjectHelper.applyRotation($designObjectElement, designObject);
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    var imageButton = $designObjectElement.data("controllers.imageButton");
                    designObject.enabled = value;
                    imageButton.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");

                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
                else if (propertyName == "text") {
                    var imageButton = $designObjectElement.data("controllers.imageButton");
                    if (imageButton != null) {
                        imageButton.text = value;
                        imageButton.refresh();
                    }
                } else if (propertyName == "textAlign") {
                    var imageButton = $designObjectElement.data("controllers.imageButton");
                    if (imageButton != null) {
                        imageButton.textAlign = value;
                        imageButton.refresh();
                    }
                } else if (propertyName == "textMargin") {
                    var imageButton = $designObjectElement.data("controllers.imageButton");
                    if (imageButton != null) {
                        imageButton.textMargin = value;
                        imageButton.refresh();
                    }
                }
            }
        }
        else if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_TEXT_ALIGN) {
            var inputValue = block.getInput("default");

            var textAlign = inputValue.getItem("textAlign").value;
            if (textAlign == "topLeft")
                return manager.returnValue(true, "top_left");
            else if (textAlign == "topCenter")
                return manager.returnValue(true, "top_center");
            else if (textAlign == "topRight")
                return manager.returnValue(true, "top_right");
            else if (textAlign == "middleLeft")
                return manager.returnValue(true, "middle_left");
            else if (textAlign == "middleCenter")
                return manager.returnValue(true, "middle_center");
            else if (textAlign == "middleRight")
                return manager.returnValue(true, "middle_right");
            else if (textAlign == "bottomLeft")
                return manager.returnValue(true, "bottom_left");
            else if (textAlign == "bottomCenter")
                return manager.returnValue(true, "bottom_center");
            else if (textAlign == "bottomRight")
                return manager.returnValue(true, "bottom_right");
            else
                return manager.returnValue(true, "null");
        }
        else if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.IMAGE_BUTTON_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    };

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.IMAGE_BUTTON_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.IMAGE_BUTTON_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.IMAGE_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT);
    this.blockTypes.push(BlockType.IMAGE_BUTTON_DESIGN_OBJECT_TEXT_ALIGN);

    this.blockTypes.push(BlockType.IMAGE_BUTTON_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.IMAGE_BUTTON_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function InputButtonDesignObjectController(player, playerData) {
    var DesignObjectType = {
        INPUT_BUTTON: "inputButton"
    };

    var InputButtonDesignObjectPropertyName = {
        FONT_COLOR: "fontcolor",
        FONT_SIZE: "fontsize",
        FONT_NAME: "fontname",
        FONT_ATTRIBUTES: "fontattributes",
        VALUE: "value"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_BUTTON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<input type='button' id='" + designObjectElementId + "'></input>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_BUTTON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            $designObjectElement.prop("type", "button");
            $designObjectElement.prop("name", designObjectElementId);
            $designObjectElement.prop("value", designObject.value);
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_COLOR.toLowerCase())
                return DesignObjectHelper.rgbToHex($designObjectElement.css("color"));
            else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_SIZE.toLowerCase())
                return parseInt($designObjectElement.css("font-size").replace("px", ""));
            else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_NAME.toLowerCase())
                return $designObjectElement.css("font-family");
            else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_ATTRIBUTES.toLowerCase()) {
                if (typeof (designObject.fontAttributes) !== "undefined")
                    return designObject.fontAttributes;
                else
                    return undefined;
            } else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.VALUE.toLowerCase())
                return designObject.value;
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_COLOR.toLowerCase())
                $designObjectElement.css("color", value);
            else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_SIZE.toLowerCase())
                $designObjectElement.css("font-size", value);
            else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_NAME.toLowerCase())
                $designObjectElement.css("font-family", value);
            else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.FONT_ATTRIBUTES.toLowerCase()) {
                designObject.fontAttributes = value;

                if (value["bold"] == true)
                    $designObjectElement.css("font-weight", "bold");
                else
                    $designObjectElement.css("font-weight", "normal");

                if (value["italic"] == true)
                    $designObjectElement.css("font-style", "italic");
                else
                    $designObjectElement.css("font-style", "normal");
            } else if (propertyName.toLowerCase() == InputButtonDesignObjectPropertyName.VALUE.toLowerCase()) {
                designObject.value = value;
                $designObjectElement.prop("value", designObject.value);
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.INPUT_BUTTON);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function InputButtonDesignObjectBlocksController(manager, player, playerData) {
    this.name = "InputButton";

    var BlockType = {
        INPUT_BUTTON_DESIGN_OBJECT_GET_PROPERTY: "inputButtonDesignObjectGetProperty",
        INPUT_BUTTON_DESIGN_OBJECT_SET_PROPERTY: "inputButtonDesignObjectSetProperty",
        INPUT_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT: "inputButtonDesignObjectOnMouseEvent",
        INPUT_BUTTON_DESIGN_OBJECT_ADD_CLASS: "inputButtonDesignObjectAddClass",
        INPUT_BUTTON_DESIGN_OBJECT_REMOVE_CLASS: "inputButtonDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.INPUT_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                        }
                    }
                }
            }
        }
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.INPUT_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional BLOCK OF CODE for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        }
        else if (block.type == BlockType.INPUT_BUTTON_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "text")
                return manager.returnValue(true, designObject.text);
            else if (propertyName.toLowerCase() == "fontcolor")
                return manager.returnValue(true, DesignObjectHelper.rgbToHex($designObjectElement.css("color")));
            else if (propertyName.toLowerCase() == "fontsize")
                return manager.returnValue(true, $designObjectElement.css("font-size").replace("px", ""));
            else if (propertyName.toLowerCase() == "fontname")
                return manager.returnValue(true, $designObjectElement.css("font-family"));
            else if (propertyName.toLowerCase() == "fontattributes") {
                if (typeof (designObject.fontAttributes) !== "undefined")
                    return manager.returnValue(true, designObject.fontAttributes);
                else
                    return manager.returnValue(true, undefined);
            }
            else if (propertyName == "value")
                return manager.returnValue(true, designObject.value);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
        }
        else if (block.type == BlockType.INPUT_BUTTON_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            
            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "rotation") {
                    designObject.rotation = value;
                    DesignObjectHelper.applyRotation($designObjectElement, designObject);
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                } else if (propertyName.toLowerCase() == "text") {
                    designObject.text = value;
                    $designObjectElement.val(value);
                }
                else if (propertyName.toLowerCase() == "fontcolor")
                    $designObjectElement.css("color", value);
                else if (propertyName.toLowerCase() == "fontsize")
                    $designObjectElement.css("font-size", value);
                else if (propertyName.toLowerCase() == "fontname")
                    $designObjectElement.css("font-family", value);
                else if (propertyName.toLowerCase() == "fontattributes") {
                    designObject.fontAttributes = value;

                    if (value["bold"] == true)
                        $designObjectElement.css("font-weight", "bold");
                    else
                        $designObjectElement.css("font-weight", "normal");

                    if (value["italic"] == true)
                        $designObjectElement.css("font-style", "italic");
                    else
                        $designObjectElement.css("font-style", "normal");
                }
                else if (propertyName == "value") {
                    designObject.value = value;
                    $designObjectElement.prop("value", designObject.value);
                }
            }
        }
        else if (block.type == BlockType.INPUT_BUTTON_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.INPUT_BUTTON_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }
        return manager.returnValue(false);
    }

    // constructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.INPUT_BUTTON_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_BUTTON_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_BUTTON_DESIGN_OBJECT_ON_MOUSE_EVENT);

    this.blockTypes.push(BlockType.INPUT_BUTTON_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.INPUT_BUTTON_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function InputRadioButtonDesignObjectController(player, playerData) {
    var DesignObjectType = {
        INPUT_RADIO_BUTTON: "inputRadioButton"
    };

    var InputRadioButtonDesignObjectPropertyName = {
        CHECKED: "checked"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_RADIO_BUTTON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<input type='radio' id='" + designObjectElementId + "'></input>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_RADIO_BUTTON) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

            $designObjectElement.prop("name", designObjectElementId);
            $designObjectElement.prop("value", designObject.value);

            if (designObject.checked)
                $designObjectElement.prop("checked", true);

            if (designObject.groupId && designObject.groupId != "")
                $designObjectElement.prop("name", designObject.groupId);
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == InputRadioButtonDesignObjectPropertyName.CHECKED.toLowerCase()) {
                return $designObjectElement.prop("checked");
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == InputRadioButtonDesignObjectPropertyName.CHECKED.toLowerCase()) {
                if (!value)
                    $designObjectElement.prop("checked", false);
                else
                    $designObjectElement.prop("checked", "checked");
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.INPUT_RADIO_BUTTON);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function InputRadioButtonDesignObjectBlocksController(manager, player, playerData) {
    this.name = "InputRadioButton";

    var BlockType = {
        INPUT_RADIO_BUTTON_DESIGN_OBJECT_GET_PROPERTY: "inputRadioButtonDesignObjectGetProperty",
        INPUT_RADIO_BUTTON_DESIGN_OBJECT_SET_PROPERTY: "inputRadioButtonDesignObjectSetProperty",
        INPUT_RADIO_BUTTON_DESIGN_OBJECT_ON_CHECK_EVENT: "inputRadioButtonDesignObjectOnCheckEvent",
        INPUT_RADIO_BUTTON_DESIGN_OBJECT_ADD_CLASS: "inputRadioButtonDesignObjectAddClass",
        INPUT_RADIO_BUTTON_DESIGN_OBJECT_REMOVE_CLASS: "inputRadioButtonDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];
            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_ON_CHECK_EVENT) {
                            var designObjectId = "";
                            var eventName = "";
                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "")
                                if (eventName != "")
                                    $("#" + designObjectId).click({ "block": block }, onRadioButtonChanged);
                        }
                    }
                }
            }
        }
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_ON_CHECK_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                if (block.type == BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_ON_CHECK_EVENT) {
                    scopeVariables_.push(manager.createVariable("checked", designObjectElement.prop("checked") != undefined));
                }

                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
            }
        }
        else if (block.type == BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "value")
                return manager.returnValue(true, designObject.value);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "checked") {
                return manager.returnValue(true, $designObjectElement.prop("checked"));
            }
        }
        else if (block.type == BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
                else if (propertyName == "checked") {
                    if (!value)
                        $designObjectElement.prop("checked", false);
                    else
                        $designObjectElement.prop("checked", "checked");
                }
            }
        }
        else if (block.type == BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    }

    var onRadioButtonChanged = function (e) {
        if ($(this).is(':checked')) {
            var block = e.data.block;
            manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
        }
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_ON_CHECK_EVENT);

    this.blockTypes.push(BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.INPUT_RADIO_BUTTON_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function InputCheckBoxDesignObjectController(player, playerData) {
    var DesignObjectType = {
        INPUT_CHECKBOX: "inputCheckBox"
    };

    var InputCheckBoxDesignObjectPropertyName = {
        CHECKED: "checked",
        VALUE: "value"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_CHECKBOX) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<input style='margin:0' type='checkbox' id='" + designObjectElementId + "'></input>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    };

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_CHECKBOX) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

            $designObjectElement.prop("name", designObjectElementId);
            $designObjectElement.prop("value", designObject.value);

            if (designObject.checked)
                $designObjectElement.prop("checked", true);
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }


    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == InputCheckBoxDesignObjectPropertyName.CHECKED.toLowerCase())
                return $designObjectElement.prop("checked");
            else if (propertyName.toLowerCase() == InputCheckBoxDesignObjectPropertyName.VALUE.toLowerCase())
                return designObject.value;
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == InputCheckBoxDesignObjectPropertyName.CHECKED.toLowerCase())
                $designObjectElement.prop("checked", false);
            else if (propertyName.toLowerCase() == InputCheckBoxDesignObjectPropertyName.VALUE.toLowerCase()) {
                designObject.value = value;
                $designObjectElement.prop("value", designObject.value);
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.INPUT_CHECKBOX);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function InputCheckBoxDesignObjectBlocksController(manager, player, playerData) {
    this.name = "InputCheckBox";

    var BlockType = {
        INPUT_CHECKBOX_DESIGN_OBJECT_GET_PROPERTY: "inputCheckBoxDesignObjectGetProperty",
        INPUT_CHECKBOX_DESIGN_OBJECT_SET_PROPERTY: "inputCheckBoxDesignObjectSetProperty",
        INPUT_CHECKBOX_DESIGN_OBJECT_ON_CHECK_EVENT: "inputCheckBoxDesignObjectOnCheckEvent",
        INPUT_CHECKBOX_DESIGN_OBJECT_ADD_CLASS: "inputCheckBoxDesignObjectAddClass",
        INPUT_CHECKBOX_DESIGN_OBJECT_REMOVE_CLASS: "inputCheckBoxDesignObjectRemoveClass"    
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_ON_CHECK_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "")
                                if (eventName != "")
                                    $("#" + designObjectId).change({"block": block}, onCheckBoxChanged);
                        }
                    }
                }
            }
        }
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_ON_CHECK_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_ON_CHECK_EVENT) {
                    scopeVariables_.push(manager.createVariable("checked", designObjectElement.attr("checked") != undefined));
                }

                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
            }
        }
        else if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "value")
                return manager.returnValue(true, designObject.value);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "checked") {
                return manager.returnValue(true, $designObjectElement.prop("checked"));
            }
        }
        else if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
                else if (propertyName == "checked") {
                    if (!value)
                        $designObjectElement.prop("checked", false);
                    else
                        $designObjectElement.prop("checked", "checked");
                }
            }
        }
        else if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    }    

    var onCheckBoxChanged = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_ON_CHECK_EVENT);
    this.blockTypes.push(BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.INPUT_CHECKBOX_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function InputDropDownListDesignObjectController(player, playerData) {
    var DesignObjectType = {
        INPUT_DROP_DOWN_LIST: "inputDropDownList"
    };

    var InputDropDrownListDesignObjectPropertyName = {
        ITEM: "item",
        TEXT: "text",
        VALUE: "value",
        INDEX: "index"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_DROP_DOWN_LIST) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_DROP_DOWN_LIST) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

            var dropDownList = new Sbt.DropDown(designObjectElementId);

            dropDownList.data = {};
            dropDownList.data.width = designObject.width;
            dropDownList.data.height = designObject.height;

            dropDownList.data.items = [];
            if (designObject.items != null) {
                for (var i = 0; i < designObject.items.length; i++) {
                    var obj = {};
                    obj.text = designObject.items[i].text;
                    obj.value = designObject.items[i].value;
                    obj.arguments = designObject.items[i].arguments;
                    dropDownList.data.items.push(obj);
                }
            }

            $designObjectElement.data("controllers.dropDownList", dropDownList);

            dropDownList.render();

            if (designObject.dropDownHeight > 0) {
                dropDownList.listBox.css("height", designObject.dropDownHeight + "px");
                dropDownList.listBox.css("overflow-y", "scroll");
            }
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        //var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextFrameBlockDesignObject, totalTime, currentTime);
        //var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(designObject, nextFrameBlockDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        //DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        //var rotation = designObject.rotation;
        //var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        //DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        //DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            var dropDownList = $designObjectElement.data("controllers.dropDownList");
            var selectedItem = dropDownList.selected;

            if (propertyName.toLowerCase() == InputDropDrownListDesignObjectPropertyName.ITEM.toLowerCase()) {
                if (selectedItem == undefined)
                    return null;
                else
                    return selectedItem;
            } else if (propertyName.toLowerCase() == InputDropDrownListDesignObjectPropertyName.TEXT.toLowerCase()) {
                var text = selectedItem.text;
                if (selectedItem != undefined)
                    return text;
                else
                    return "";
            } else if (propertyName.toLowerCase() == InputDropDrownListDesignObjectPropertyName.VALUE.toLowerCase()) {
                if (selectedItem != undefined)
                    return selectedItem.value;
                else
                    return null;
            } else if (propertyName.toLowerCase() == InputDropDrownListDesignObjectPropertyName.INDEX.toLowerCase()) {
                if (dropDownList.selectedIndex != undefined)
                    return dropDownList.selectedIndex;
                else
                    return -1;
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);

        if (!result) {
            var dropDownList = $designObjectElement.data("controllers.dropDownList");

            if (propertyName.toLowerCase() == InputDropDrownListDesignObjectPropertyName.TEXT.toLowerCase()) {
                var dropDownItems = dropDownList.data.items;
                if (dropDownItems != null) {

                    for (var i = 0; i < dropDownItems.length; i++) {
                        if (dropDownItems[i].text == value) {
                            dropDownList.selectedIndex = i;
                            break;
                        }
                    }
                }
            } else if (propertyName.toLowerCase() == InputDropDrownListDesignObjectPropertyName.VALUE.toLowerCase()) {
                var dropDownItems = dropDownList.data.items;
                if (dropDownItems != null) {

                    for (var i = 0; i < dropDownItems.length; i++) {
                        if (dropDownItems[i].value == value) {
                            dropDownList.selectedIndex = i;
                            break;
                        }
                    }
                }
            } else if (propertyName.toLowerCase() == InputDropDrownListDesignObjectPropertyName.INDEX.toLowerCase()) {

                var dropDownItems = dropDownList.data.items;

                if (dropDownItems != null) {
                    if (dropDownItems.length > value) {
                        dropDownList.selectedIndex = value;
                    }
                }
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.INPUT_DROP_DOWN_LIST);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function InputDropDownListDesignObjectBlocksController(manager, player, playerData) {
    this.name = "InputDropDown";

    var BlockType = {
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_GET_PROPERTY: "inputDropDownListDesignObjectGetProperty",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_SET_PROPERTY: "inputDropDownListDesignObjectSetProperty",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_ON_SELECTED_ITEM_CHANGED: "inputDropDownListDesignObjectOnSelectedItemChanged",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_CLEAR: "inputDropDownListDesignObjectClear",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_CLASS: "inputDropDownListDesignObjectAddClass",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_CLASS: "inputDropDownListDesignObjectRemoveClass",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_ITEM: "inputDropDownListDesignObjectAdditem",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_ITEM_AT: "inputDropDownListDesignObjectAdditemAt",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_ITEM: "inputDropDownListDesignObjectRemoveItem",
        INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_ITEM_AT: "inputDropDownListDesignObjectRemoveItemAt"
    };

    this.preInitialize = function () {

    };

    this.initialize = function () {
        initializeEvents();
    };

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ON_SELECTED_ITEM_CHANGED) {
                            var inputDefault = block.getInput("default");
                            var id = inputDefault.getItem("id").value;
                            var designObjectSelector = $("#" + id);
                            var dropDown = designObjectSelector.data("controllers.dropDownList");
                            var dropDownSelector = $(dropDown);
                            dropDownSelector.on(dropDown._EVENT_CHANGED, { "block": block }, onDropDownListSelectedIndexChanged);
                        }
                    }
                }
            }
        }
    };

    var onDropDownListSelectedIndexChanged = function (e, dropDownList) {
        var block = e.data.block;

        var selectedItem = dropDownList.selected;
        var selectedText = selectedItem.text;
        var selectedValue = selectedItem.value;
        var selectedIndex = dropDownList.selectedIndex;

        var eventVariables = manager.createVariables();
        eventVariables.add("selectedItem", selectedItem);
        eventVariables.add("selectedText", selectedText);
        eventVariables.add("selectedValue", selectedValue);
        eventVariables.add("selectedIndex", selectedIndex);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    this.postInitialize = function () {

    };

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "item") {
                var dropDownList = $designObjectElement.data("controllers.dropDownList");
                var selectedItem = dropDownList.selected;
                if (selectedItem == undefined)
                    selectedItem = null;

                return manager.returnValue(true, selectedItem);
            }
            else if (propertyName == "text") {
                var dropDownList = $designObjectElement.data("controllers.dropDownList");
                var selectedItem = dropDownList.selected;
                var text;

                if (selectedItem != undefined)
                    text = selectedItem.text;
                else
                    text = "";

                return manager.returnValue(true, text);
            }
            else if (propertyName == "value") {
                var dropDownList = $designObjectElement.data("controllers.dropDownList");
                var selectedItem = dropDownList.selected;
                var value;

                if (selectedItem != undefined)
                    value = selectedItem.value;
                else
                    value = null;

                return manager.returnValue(true, value);
            }
            else if (propertyName == "index") {
                var dropDownList = $designObjectElement.data("controllers.dropDownList");
                var index = -1;
                if (dropDownList.selectedIndex != undefined)
                    index = dropDownList.selectedIndex;

                return manager.returnValue(true, index);
            }
            else if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass(designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "text") {
                    var inputDefault = block.getInput("default");
                    var newValue;
                    if (inputDefault.block != null)
                        var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                    if (result != null && result.hasReturnValue)
                        newValue = result.value;

                    if (newValue != null) {
                        var dropDown = $designObjectElement.data("controllers.dropDownList");
                        var dropDownItems = dropDown.data.items;
                        if (dropDownItems != null) {

                            for (var i = 0; i < dropDownItems.length; i++) {
                                if (dropDownItems[i].text == newValue) {
                                    dropDown.selectedIndex = i;
                                    break;
                                }
                            }
                        }
                    }
                }
                else if (propertyName == "value") {
                    var inputDefault = block.getInput("default");
                    var newValue;
                    if (inputDefault.block != null)
                        var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                    if (result != null && result.hasReturnValue)
                        newValue = result.value;

                    if (newValue != null) {
                        var dropDown = $designObjectElement.data("controllers.dropDownList");
                        var dropDownItems = dropDown.data.items;
                        if (dropDownItems != null) {

                            for (var i = 0; i < dropDownItems.length; i++) {
                                if (dropDownItems[i].value == newValue) {
                                    dropDown.selectedIndex = i;
                                    break;
                                }
                            }
                        }
                    }
                }
                else if (propertyName == "index") {
                    var inputDefault = block.getInput("default");

                    if (inputDefault.block != null) {
                        var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                        if (result != null && result.hasReturnValue) {
                            var index = result.value;

                            var dropDown = $designObjectElement.data("controllers.dropDownList");
                            var dropDownItems = dropDown.data.items;

                            if (dropDownItems != null) {
                                if (dropDownItems.length > index) {
                                    dropDown.selectedIndex = index;
                                }
                            }
                        }
                    }
                }
                else if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    var dropDown = $designObjectElement.data("controllers.dropDownList");
                    index = dropDown.selectedIndex;
                    dropDown.data.width = value;
                    dropDown.render();
                    dropDown.selectedIndex = index;

                    $designObjectElement.css("width", value + "px");
                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    var dropDown = $designObjectElement.data("controllers.dropDownList");
                    index = dropDown.selectedIndex;
                    dropDown.data.height = value;
                    dropDown.render();
                    dropDown.selectedIndex = index;

                    $designObjectElement.css("height", value + "px");
                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    var dropDown = $designObjectElement.data("controllers.dropDownList");
                    dropDown.enable = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName == "value") {
                    var dropDown = designObjectSelector.data("controllers.dropDownList");
                    var dropDownItems = dropDown.data.items;
                    if (dropDownItems != null) {

                        for (var i = 0; i < dropDownItems.length; i++) {
                            if (dropDownItems[i].value == newValue) {
                                dropDown.selectedIndex = i;
                                break;
                            }
                        }
                    }

                }
            }
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ON_SELECTED_ITEM_CHANGED) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var selectedItem = eventVariables.getValue("selectedItem");
            var selectedText = eventVariables.getValue("selectedText");
            var selectedValue = eventVariables.getValue("selectedValue");
            var selectedIndex = eventVariables.getValue("selectedIndex");

            scopeVariables_.push(manager.createVariable("selectedItem", selectedItem));
            scopeVariables_.push(manager.createVariable("selectedText", selectedText));
            scopeVariables_.push(manager.createVariable("selectedValue", selectedValue));
            scopeVariables_.push(manager.createVariable("selectedIndex", selectedIndex));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_CLEAR) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var dropDownList = $designObjectElement.data("controllers.dropDownList");

            dropDownList.render();
            dropDownList.selected = undefined;
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_ITEM) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var dropDown = $designObjectElement.data("controllers.dropDownList");

            var itemIndex = inputDefault.getItem("text");
            var text = "";
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    text = result.value;
            }

            var itemId = inputDefault.getItem("value");
            var value = "";
            if (itemId.block != null) {
                var result = manager.executeBlock(itemId.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            var item = {
                arguments: "",
                text: text,
                value: value
            }

            dropDown.data.items.push(item);
            var index = dropDown.selectedIndex;
            dropDown.render();
            dropDown.selectedIndex = index;
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_ITEM_AT) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var dropDown = $designObjectElement.data("controllers.dropDownList");

            var itemText = inputDefault.getItem("text");
            var text = "";
            if (itemText.block != null) {
                var result = manager.executeBlock(itemText.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    text = result.value;
            }

            var itemId = inputDefault.getItem("value");
            var value = "";
            if (itemId.block != null) {
                var result = manager.executeBlock(itemId.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            var itemIndex = inputDefault.getItem("index");
            var itemIndexValue = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    itemIndexValue = result.value;
            }

            var item = {
                arguments: "",
                text: text,
                value: value
            }

            dropDown.data.items.splice(itemIndexValue, 0, item);
            var index = dropDown.selectedIndex;
            dropDown.render();
            dropDown.selectedIndex = index;
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_ITEM) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var dropDown = $designObjectElement.data("controllers.dropDownList");

            dropDown.data.items.splice(-1, 1)
            var index = dropDown.selectedIndex;
            dropDown.render();
            dropDown.selectedIndex = index;
        }
        else if (block.type == BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_ITEM_AT) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var dropDown = $designObjectElement.data("controllers.dropDownList");
                     
            var itemIndex = inputDefault.getItem("index");
            var itemIndexValue = 0;
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    itemIndexValue = result.value;
            }

            dropDown.data.items.splice(itemIndexValue, 1)
            var index = dropDown.selectedIndex;
            dropDown.render();
            dropDown.selectedIndex = index;
        }

        return manager.returnValue(false);
    };

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ON_SELECTED_ITEM_CHANGED);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_CLEAR);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_CLASS);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_ITEM);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_ADD_ITEM_AT);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_ITEM);
    this.blockTypes.push(BlockType.INPUT_DROPDOWNLIST_DESIGN_OBJECT_REMOVE_ITEM_AT);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function InputTextBoxDesignObjectController(player, playerData) {
    var DesignObjectType = {
        INPUT_TEXTBOX: "inputTextBox"
    };

    var InputTextBoxDesignObjectPropertyName = {
        VALUE: "value",
        TEXT: "text",
        TOOLTIP_TEXT: "tooltipText",
        TOOLTIP_ENABLED: "tooltipEnabled",
        TOOLTIP_POSITION: "tooltipPosition",
        READ_ONLY: "readOnly",
        MAXIMUM_LENGTH: "maximumLength",
        VALIDATION_EXPRESSION: "validationExpression",
        BACKGROUND_COLOR: "backgroundColor",
        TRANSPARENT: "transparent"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_TEXTBOX) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<input type='text' id='" + designObjectElementId + "'></input>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.INPUT_TEXTBOX) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var $designObjectSpanElement = $("#" + designObjectElementId);

            //$designObjectSpanElement.value = designObject.text;
            //$designObjectElement.prop("type", "text");
            $designObjectElement.prop("name", designObjectElementId);
            $designObjectSpanElement.prop("value", designObject.text);

            designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

            var input = new Sbt.InputBox(designObjectElementId);
            input.tooltip = designObject.tooltipText;
            input.enableTooltip = designObject.tooltipEnabled;

            if (designObject.maximumLength > 0)
                input.maxChars = designObject.maximumLength;

            if (designObject.tooltipPosition == "top") {
                input.tooltipPosition = 1;
            }
            else if (designObject.tooltipPosition == "right") {
                input.tooltipPosition = 2;
            }
            else if (designObject.tooltipPosition == "bottom") {
                input.tooltipPosition = 3;
            }
            else if (designObject.tooltipPosition == "left") {
                input.tooltipPosition = 4;
            }

            input.validationRegExp = [{ "check": true, "regexp": designObject.validationExpression }];
            input.highlightOnFocus = designObject.highlightOnFocus;
            $designObjectElement.data("controllers.input", input);

            // transparency support
            if (designObject.transparent) {
                $designObjectElement.css("background", "transparent");
                $designObjectElement.css("border", "none");
            }
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TEXT.toLowerCase())
                return $designObjectElement.val()
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TOOLTIP_TEXT.toLowerCase())
                return designObject.tooltipText;
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TOOLTIP_ENABLED.toLowerCase())
                return designObject.tooltipEnabled;
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TOOLTIP_POSITION.toLowerCase())
                return designObject.tooltipPosition;
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.READ_ONLY.toLowerCase())
                return designObject.readOnly;
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.MAXIMUM_LENGTH.toLowerCase())
                return designObject.maximumLength;
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.VALIDATION_EXPRESSION.toLowerCase())
                return designObject.validationExpression;
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.BACKGROUND_COLOR.toLowerCase())
                return designObject.backgroundColor;
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TRANSPARENT.toLowerCase())
                return designObject.transparent;
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            var inputBox = $designObjectElement.data("controllers.input");

            if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TEXT.toLowerCase())
                $designObjectElement.val(value);
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TOOLTIP_TEXT.toLowerCase()) {
                designObject.tooltipText = value;
                inputBox.tooltip = value;
            }
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TOOLTIP_ENABLED.toLowerCase()) {
                designObject.tooltipEnabled = value;
                inputBox.enableTooltip = value;
            }
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TOOLTIP_POSITION.toLowerCase()) {
                designObject.tooltipPosition = value;
                inputBox.tooltipPosition = value;
            }
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.READ_ONLY.toLowerCase()) {
                designObject.readOnly = value;
                inputBox.readonly = value;
            }
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.MAXIMUM_LENGTH.toLowerCase()) {
                if (value > 0) {
                    designObject.maximumLength = value;
                    inputBox.maxChars = value;
                }
                else {
                    designObject.maximumLength = -1;
                    inputBox.maxChars = undefined;
                }
            }
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.VALIDATION_EXPRESSION.toLowerCase()) {
                designObject.validationExpression = value;
                inputBox.validationRegExp = [{ "check": true, "regexp": value }];
            }
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.BACKGROUND_COLOR.toLowerCase()) {
                designObject.colorize = value;
                inputBox.colorize(value);
            }
            else if (propertyName.toLowerCase() == InputTextBoxDesignObjectPropertyName.TRANSPARENT.toLowerCase()) {
                designObject.transparent = value;
                if (!value) {
                    $designObjectElement.css("background", undefined);
                    $designObjectElement.css("border", undefined);
                } else {
                    $designObjectElement.css("background", "transparent");
                    $designObjectElement.css("border", "none");
                }
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.INPUT_TEXTBOX);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function InputTextBoxDesignObjectBlocksController(manager, player, playerData) {
    this.name = "InputTextBox";

    var BlockType = {
        INPUT_TEXTBOX_DESIGN_OBJECT_GET_PROPERTY: "inputTextBoxDesignObjectGetProperty",
        INPUT_TEXTBOX_DESIGN_OBJECT_SET_PROPERTY: "inputTextBoxDesignObjectSetProperty",
        INPUT_TEXTBOX_DESIGN_OBJECT_ON_TEXT_CHANGED_EVENT: "inputTextBoxDesignObjectOnTextChangedEvent",
        INPUT_TEXTBOX_DESIGN_OBJECT_ON_FOCUS_EVENT: "inputTextBoxDesignObjectOnFocusEvent",
        INPUT_TEXTBOX_DESIGN_OBJECT_ON_KEYPRESS_EVENT: "inputTextBoxDesignObjectOnKeypressEvent",
        INPUT_TEXTBOX_DESIGN_OBJECT_IGNORE_KEY: "inputTextBoxDesignObjectIgnoreKey",
        INPUT_TEXTBOX_DESIGN_OBJECT_SET_HIGHLIGHT_COLOR: "inputTextboxDesignObjectSetHighlightColor",
        INPUT_TEXTBOX_DESIGN_OBJECT_TOOLTIP_POSITION: "inputTextboxDesignObjectTooltipPosition",
        INPUT_TEXTBOX_DESIGN_OBJECT_VALIDATE: "inputTextboxDesignObjectValidate",
        INPUT_TEXTBOX_DESIGN_OBJECT_ADD_CLASS: "inputTextboxDesignObjectAddClass",
        INPUT_TEXTBOX_DESIGN_OBJECT_REMOVE_CLASS: "inputTextboxDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                        }
                        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_FOCUS_EVENT) {
                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItemId = blockInput.getItem("id");
                                if (blockInputItemId != null) {
                                    var designObjectId = blockInputItemId.value;
                                    if (designObjectId != "") {
                                        var $designObjectElement = $("#" + designObjectId);

                                        var blockInputItemEventName = blockInput.getItem("eventName");
                                        var eventName = blockInputItemEventName.value;
                                        if (eventName == "got_focus")
                                            $designObjectElement.focus({ "block": block }, onInputTextBoxGotFocus);
                                        else if (eventName == "lost_focus")
                                            $designObjectElement.blur({ "block": block }, onInputTextBoxLostFocus);
                                    }
                                }
                            }
                        }
                        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_KEYPRESS_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null) {
                                    designObjectId = blockInputItem.value;
                                    if (designObjectId != "") {
                                        var $designObjectElement = $("#" + designObjectId);
                                        $designObjectElement.keypress({ "block": block }, onInputTextBoxKeypress);
                                    }
                                }
                            }
                        }
                        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_TEXT_CHANGED_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null) {
                                    designObjectId = blockInputItem.value;
                                    if (designObjectId != "") {
                                        var $designObjectElement = $("#" + designObjectId);
                                        $designObjectElement.on("input", { "block": block }, onInputTextBoxTextChanged);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onInputTextBoxGotFocus = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onInputTextBoxLostFocus = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onInputTextBoxTextChanged = function (e) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();
        eventVariables.add("text", e.target.value);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    var onInputTextBoxKeypress = function (e) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();
        eventVariables.add("key", e.which);
        eventVariables.add("event", e);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_FOCUS_EVENT) {
            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);

        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_KEYPRESS_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var key = eventVariables.getValue("key");
            scopeVariables_.push(manager.createVariable("key", key));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_TEXT_CHANGED_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var text = eventVariables.getValue("text");
            scopeVariables_.push(manager.createVariable("text", text));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_IGNORE_KEY) {
            var event = eventVariables.getValue("event");
            if (event != null)
                event.preventDefault();
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "text")
                return manager.returnValue(true, $designObjectElement.val());
            else if (propertyName == "value") {
                var dropDown = designObjectSelector.data("controllers.dropDownList");
                return manager.returnValue(true, dropDown.selected.value);
            }
            else if (propertyName.toLowerCase() == "tooltipText".toLowerCase())
                return manager.returnValue(true, designObject.tooltipText);
            else if (propertyName.toLowerCase() == "tooltipEnabled".toLowerCase())
                return manager.returnValue(true, designObject.tooltipEnabled);
            else if (propertyName.toLowerCase() == "tooltipPosition".toLowerCase())
                return manager.returnValue(true, designObject.tooltipPosition);
            else if (propertyName.toLowerCase() == "readOnly".toLowerCase())
                return manager.returnValue(true, designObject.readOnly);
            else if (propertyName.toLowerCase() == "maximumLength".toLowerCase())
                return manager.returnValue(true, designObject.maximumLength);
            else if (propertyName.toLowerCase() == "validationExpression".toLowerCase())
                return manager.returnValue(true, designObject.validationExpression);
            else if (propertyName.toLowerCase() == "backgroundColor".toLowerCase())
                return manager.returnValue(true, designObject.backgroundColor);
            else if (propertyName.toLowerCase() == "transparent".toLowerCase())
                return manager.returnValue(true, designObject.transparent);
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var inputBox = $designObjectElement.data("controllers.input");
            var value = null;

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "rotation") {
                    designObject.rotation = value;
                    DesignObjectHelper.applyRotation($designObjectElement, designObject);
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;

                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName == "text") {
                    designObject.text = value;
                    $designObjectElement.prop("value", designObject.text);
                }
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
                else if (propertyName.toLowerCase() == "tooltipText".toLowerCase()) {
                    designObject.tooltipText = value;
                    inputBox.tooltip = value;
                }
                else if (propertyName.toLowerCase() == "tooltipEnabled".toLowerCase()) {
                    designObject.tooltipEnabled = value;
                    inputBox.enableTooltip = value;
                }
                else if (propertyName.toLowerCase() == "tooltipPosition".toLowerCase()) {
                    designObject.tooltipPosition = value;
                    inputBox.tooltipPosition = value;
                }
                else if (propertyName.toLowerCase() == "readOnly".toLowerCase()) {
                    designObject.readOnly = value;
                    inputBox.readonly = value;
                }
                else if (propertyName.toLowerCase() == "maximumLength".toLowerCase()) {
                    if (value > 0) {
                        designObject.maximumLength = value;
                        inputBox.maxChars = value;
                    }
                    else {
                        designObject.maximumLength = -1;
                        inputBox.maxChars = undefined;
                    }
                }
                else if (propertyName.toLowerCase() == "validationExpression".toLowerCase()) {
                    designObject.validationExpression = value;
                    inputBox.validationRegExp = [{ "check": true, "regexp": value }];
                }
                else if (propertyName.toLowerCase() == "backgroundColor".toLowerCase()) {
                    designObject.colorize = value;
                    inputBox.colorize(value);
                } else if (propertyName.toLowerCase() == "backgroundColor".toLowerCase()) {
                    designObject.colorize = value;
                    inputBox.colorize(value);
                } else if (propertyName.toLowerCase() == "transparent".toLowerCase()) {
                    designObject.transparent = value;
                    if (!value) {
                        $designObjectElement.css("background", undefined);
                        $designObjectElement.css("border", undefined);
                    } else {
                        $designObjectElement.css("background", "transparent");
                        $designObjectElement.css("border", "none");
                    }
                }
            }
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_SET_HIGHLIGHT_COLOR) {
            var inputDefault = block.getInput("default");
            var value = "";

            var id = inputDefault.getItem("id").value;
            var highlightColor = inputDefault.getItem("highlightColor").value;

            var $designObjectElement = $("#" + id);
            var inputBox = $designObjectElement.data("controllers.input");

            if (highlightColor == "red") {
                value = inputBox.COLOR_RED
                inputBox.highlight(value);
            }
            else if (highlightColor == "yellow") {
                value = inputBox.COLOR_YELLOW
                inputBox.highlight(value);
            }
            else if (highlightColor == "green") {
                value = inputBox.COLOR_GREEN
                inputBox.highlight(value);
            }
            else if (highlightColor == "none") {
                inputBox.removeHighlight();
            }
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_TOOLTIP_POSITION) {
            var inputDefault = block.getInput("default");
            var position = inputDefault.getItem("position").value;

            if (position == "top") {
                return manager.returnValue(true, 1);
            }
            else if (position == "right") {
                return manager.returnValue(true, 2);
            }
            else if (position == "bottom") {
                return manager.returnValue(true, 3);
            }
            else if (position == "left") {
                return manager.returnValue(true, 4);
            }
            else {
                return manager.returnValue(true, undefined);
            }
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_VALIDATE) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var inputBox = $designObjectElement.data("controllers.input");

            return manager.returnValue(true, inputBox.checkValidation());
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_TEXT_CHANGED_EVENT);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_FOCUS_EVENT);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ON_KEYPRESS_EVENT);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_IGNORE_KEY);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_SET_HIGHLIGHT_COLOR);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_TOOLTIP_POSITION);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_VALIDATE);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.INPUT_TEXTBOX_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function JsonDataSetBlocksController(manager, player, playerData) {
    this.name = "Video";

    var BlockType = {
        JSON_DATASET_GET_VALUE: "jsonDataSetGetValue",
        JSON_DATASET_GET_TABLE_ROW_COUNT: "jsonDataSetGetTableRowCount",
        JSON_DATASET_GET_TABLE_ROW_AS_OBJECT: "jsonDataSetGetTableRowAsObject"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {

    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.JSON_DATASET_GET_VALUE) {
            var inputDefault = block.getInput("default");

            var tableName = "";
            var inputItemTableName = inputDefault.getItem("tableName");
            if (inputItemTableName != null) {
                var result = manager.executeBlock(inputItemTableName.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    tableName = result.value;
            }

            var fieldName = "";
            var inputItemFieldName = inputDefault.getItem("fieldName");
            if (inputItemFieldName != null) {
                var result = manager.executeBlock(inputItemFieldName.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    fieldName = result.value;
            }
            
            var rowIndex = -1;
            
            var inputItemRowIndex = inputDefault.getItem("rowIndex");
            if (inputItemRowIndex.block != null) {
                var result = manager.executeBlock(inputItemRowIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    rowIndex = result.value;
            }

            if (rowIndex != -1) {
                var table = getTableByName(tableName);
                if (table != null) {
                    return manager.returnValue(true, table[rowIndex][fieldName]);
                }
            }
        } else if (block.type == BlockType.JSON_DATASET_GET_TABLE_ROW_COUNT) {
            var inputDefault = block.getInput("default");

            var tableName = "";
            if (inputDefault.getItem("tableName") != null) {
                var result = manager.executeBlock(inputDefault.getItem("tableName").block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    tableName = result.value;
            }
            
            var table = getTableByName(tableName);
            if (table != null)
                return manager.returnValue(true, table.length);
        } else if (block.type == BlockType.JSON_DATASET_GET_TABLE_ROW_AS_OBJECT) {
            var inputDefault = block.getInput("default");

            var tableName = "";
            if (inputDefault.getItem("tableName") != null) {
                var result = manager.executeBlock(inputDefault.getItem("tableName").block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    tableName = result.value;
            }

            var rowIndex = -1;

            var inputItemRowIndex = inputDefault.getItem("rowIndex");
            if (inputItemRowIndex.block != null) {
                var result = manager.executeBlock(inputItemRowIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    rowIndex = result.value;
            }

            if (rowIndex != -1) {
                var table = getTableByName(tableName);
                if (table != null) {
                    return manager.returnValue(true, table[rowIndex]);
                }
            }
        }

        return manager.returnValue(false);
    }

    var getTableByName = function (tableName) {
        return window.VFabrika.dataset[tableName];
    }

    var onVideoEnded = function (e) {
        var block = e.data.block;
        executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.JSON_DATASET_GET_VALUE);
    this.blockTypes.push(BlockType.JSON_DATASET_GET_TABLE_ROW_COUNT);
    this.blockTypes.push(BlockType.JSON_DATASET_GET_TABLE_ROW_AS_OBJECT);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function SliderDesignObjectController(player, playerData) {
    var DesignObjectType = {
        SLIDER: "slider"
    };

    var SliderDesignObjectPropertyName = {
        VALUE: "value"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.SLIDER) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.SLIDER) {
            var slider = new Sbt.Slider($designObjectElement, {
                from: designObject.minimumValue,
                to: designObject.maximumValue,
                value: designObject.value,
                step: designObject.stepSize
            });

            slider.enable = designObject.enabled;

            $designObjectElement.data("controllers.slider", slider);
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == SliderDesignObjectPropertyName.VALUE.toLowerCase()) {
                var slider = $designObjectElement.data("controllers.slider");
                return slider.value;
            } else
                return null;
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);

        if (!result) {
            if (propertyName.toLowerCase() == SliderDesignObjectPropertyName.VALUE.toLowerCase()) {
                var slider = $designObjectElement.data("controllers.slider");
                if (slider != null)
                    slider.value = value;
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.SLIDER);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function SliderDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Slider";

    var BlockType = {
        SLIDER_DESIGN_OBJECT_GET_PROPERTY: "sliderDesignObjectGetProperty",
        SLIDER_DESIGN_OBJECT_SET_PROPERTY: "sliderDesignObjectSetProperty",
        SLIDER_DESIGN_OBJECT_ON_MOUSE_EVENT: "sliderDesignObjectOnMouseEvent",
        SLIDER_DESIGN_OBJECT_ON_VALUE_CHANGE_EVENT: "sliderDesignObjectOnValueChangeEvent",
        SLIDER_DESIGN_OBJECT_ADD_CLASS: "sliderDesignObjectAddClass",
        SLIDER_DESIGN_OBJECT_REMOVE_CLASS: "sliderDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.SLIDER_DESIGN_OBJECT_ON_MOUSE_EVENT ||
                            block.type == BlockType.SLIDER_DESIGN_OBJECT_ON_VALUE_CHANGE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                if (block.type == BlockType.SLIDER_DESIGN_OBJECT_ON_VALUE_CHANGE_EVENT) {
                                    var slider = $("#" + designObjectId).data("controllers.slider");
                                    if (eventName == "valueChanged")
                                        $(slider).on(Sbt.Slider.Event.CHANGED, { "block": block }, onSliderValueChanged);
                                } else {
                                    var eventName_ = "";

                                    if (eventName == "mousedown")
                                        eventName_ = Sbt.Actions.down;
                                    else if (eventName == "mouseup")
                                        eventName_ = Sbt.Actions.up;
                                    else if (eventName == "mousemove")
                                        eventName_ = Sbt.Actions.move;
                                    else if (eventName == "click")
                                        eventName_ = Sbt.Actions.click;
                                    else
                                        eventName_ = eventName;

                                    if (eventName_ != "")
                                        $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    var onSliderValueChanged = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.SLIDER_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "value") {
                var slider = $designObjectElement.data("controllers.slider");
                if(slider != null)
                    return manager.returnValue(true, slider.value);
            }
                
        }
        else if (block.type == BlockType.SLIDER_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    value = result.value;

                    if (propertyName == "locationX")
                        $designObjectElement.css("left", value + "px");
                    else if (propertyName == "locationY")
                        $designObjectElement.css("top", value + "px");
                    else if (propertyName == "width") {
                        $designObjectElement.css("width", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName == "height") {
                        $designObjectElement.css("height", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName == "rotation") {
                        designObject.rotation = value;
                        DesignObjectHelper.applyRotation($designObjectElement, designObject);
                    }
                    else if (propertyName == "isDroppable") {
                        designObject.isDroppable = value;

                        if (value)
                            player.enableDesignObjectAsDroppable(id);
                        else
                            player.disableDesignObjectAsDroppable(id);
                    }
                    else if (propertyName == "isDraggable") {
                        designObject.isDraggable = value;

                        if (value)
                            player.enableDesignObjectAsDraggable(id);
                        else
                            player.disableDesignObjectAsDraggable(id);
                    }
                    else if (propertyName == "visible") {
                        designObject.visible = value;
                        if (value)
                            $designObjectElement.css("display", "block");
                        else
                            $designObjectElement.css("display", "none");
                    }
                    else if (propertyName == "enabled") {
                        designObject.enabled = value;


                        // set enabled for dom element
                        if (value)
                            $designObjectElement.removeAttr("disabled");
                        else
                            $designObjectElement.attr("disabled", "disabled");

                        // set enabled for slider
                        var slider = $designObjectElement.data("controllers.slider");
                        if (slider != null)
                            slider.enable = value;
                    }
                    else if (propertyName == "alpha") {
                        if (value < 0)
                            value = 0;
                        if (value > 100)
                            value = 100;
                        designObject.alpha = value;
                        value = parseFloat(value / 100);
                        $designObjectElement.css("opacity", value);
                    }
                    else if (propertyName == "className") {
                        var classNames = $designObjectElement.attr("class");
                        classNames = manager.setUserClass(classNames, value);
                        $designObjectElement.attr("class", classNames);
                    }
                    else if (propertyName == "tag")
                        designObject.tag = value;
                    else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                        if (!value)
                            $designObjectElement.css("cursor", "default");
                        else
                            $designObjectElement.css("cursor", "pointer");
                        designObject.useHandCursor = value;
                    }
                    else if (propertyName == "value") {
                        var slider = $designObjectElement.data("controllers.slider");
                        if (slider != null)
                            slider.value = value;                        
                    }
                }
            }
        }
        else if (block.type == BlockType.SLIDER_DESIGN_OBJECT_ON_MOUSE_EVENT ||
            block.type == BlockType.SLIDER_DESIGN_OBJECT_ON_VALUE_CHANGE_EVENT) {

            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

                if (block.type == BlockType.SLIDER_DESIGN_OBJECT_ON_VALUE_CHANGE_EVENT) {
                    var slider = $("#" + designObjectId).data("controllers.slider");
                    scopeVariables_.push(manager.createVariable("value", slider.value));
                }

                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
            }
        }
        else if (block.type == BlockType.SLIDER_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.SLIDER_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.SLIDER_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.SLIDER_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.SLIDER_DESIGN_OBJECT_ON_MOUSE_EVENT);
    this.blockTypes.push(BlockType.SLIDER_DESIGN_OBJECT_ON_VALUE_CHANGE_EVENT);
    this.blockTypes.push(BlockType.SLIDER_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.SLIDER_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function TableDesignObjectController(player, playerData) {
    var DesignObjectType = {
        TABLE: "table"
    };

    var TableDesignObjectPropertyName = {
        SELECTED_ROW_INDEX: "selectedRowIndex",
        SELECTED_COLUMN_INDEX: "selectedColumnIndex",
        SELECTED_CELL_LOCATION: "selectedCellLocation"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.TABLE) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    };

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.TABLE) {
            // table
            var table = new Table(designObject);
            table.initialize();
            $designObjectElement.data("controllers.Table", table);
        }
    };

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            var table = $designObjectElement.data("controllers.Table");

            if (propertyName.toLowerCase() == TableDesignObjectPropertyName.SELECTED_ROW_INDEX.toLowerCase()) {
                if (table.selectedRowIndex != null)
                    return table.selectedRowIndex;
                else
                    return -1;
            } else if (propertyName.toLowerCase() == TableDesignObjectPropertyName.SELECTED_COLUMN_INDEX.toLowerCase()) {
                if (table.selectedColumnIndex != null)
                    return table.selectedColumnIndex;
                else
                    return -1;
            } else if (propertyName.toLowerCase() == TableDesignObjectPropertyName.SELECTED_CELL_LOCATION.toLowerCase()) {
                if (table.selectedCellLocation != null)
                    return table.selectedCellLocation;
                else
                    return { x: -1, y: -1 };
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            var table = $designObjectElement.data("controllers.Table");

            if (propertyName.toLowerCase() == TableDesignObjectPropertyName.SELECTED_ROW_INDEX.toLowerCase()) {
                if (table.selectedRowIndex != null)
                    table.selectedRowIndex = value;
            } else if (propertyName.toLowerCase() == TableDesignObjectPropertyName.SELECTED_COLUMN_INDEX.toLowerCase()) {
                if (table.selectedColumnIndex != null)
                    table.selectedColumnIndex = value;
            } else if (propertyName.toLowerCase() == TableDesignObjectPropertyName.SELECTED_CELL_LOCATION.toLowerCase()) {
                if (table.selectedCellLocation != null)
                    table.selectedCellLocation = value;
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.TABLE);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    };

    this.frameChanged = function () {

    }
}
function TableDesignObjectBlocksController(manager, player, playerData) {
    var BlockType = {
        TABLE_DESIGN_OBJECT_GET_PROPERTY: "tableDesignObjectGetProperty",
        TABLE_DESIGN_OBJECT_SET_PROPERTY: "tableDesignObjectSetProperty",
        TABLE_DESIGN_OBJECT_CLEAR: "tableDesignObjectClear",
        TABLE_DESIGN_OBJECT_ADD_ROW: "tableDesignObjectAddRow",
        TABLE_DESIGN_OBJECT_ADD_ROW_AT: "tableDesignObjectAddRowAt",
        TABLE_DESIGN_OBJECT_REMOVE_ROW: "tableDesignObjectRemoveRow",
        TABLE_DESIGN_OBJECT_REMOVE_ROW_AT: "tableDesignObjectRemoveRowAt",
        TABLE_DESIGN_OBJECT_SET_FOOTER_TEXT: "tableDesignObjectSetFooterText",
        TABLE_DESIGN_OBJECT_SET_COLUMN_BY_INDEX: "tableDesignObjectSetColumnByIndex",
        TABLE_DESIGN_OBJECT_SET_COLUMN_BY_NAME: "tableDesignObjectSetColumnByName",
        TABLE_DESIGN_OBJECT_SET_COLUMN_AT_ROW_BY_INDEX: "tableDesignObjectSetColumnAtRowByIndex",
        TABLE_DESIGN_OBJECT_SCROLL_TO_BOTTOM_ROW: "tableDesignObjectScrollToBottomRow",
        TABLE_DESIGN_OBJECT_SET_SELECTED_CELL: "tableDesignObjectSetSelectedCell",
        TABLE_DESIGN_OBJECT_GET_SELECTED_COLUMN: "tableDesignObjectGetSelectedColumn",
        TABLE_DESIGN_OBJECT_GET_SELECTED_ROW: "tableDesignObjectGetSelectedRow",
        TABLE_DESIGN_OBJECT_CLEAR_SELECTION: "tableDesignObjectClearSelection",
        TABLE_DESIGN_OBJECT_ADD_CLASS: "tableDesignObjectAddClass",
        TABLE_DESIGN_OBJECT_REMOVE_CLASS: "tableDesignObjectRemoveClass"
    };

    this.name = "Table";

    this.preInitialize = function () {

    }

    this.initialize = function () {

    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.TABLE_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var table = $designObjectElement.data("controllers.Table");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "selectedRowIndex") {
                if (table.selectedRowIndex != null)
                    table.selectedRowIndex;
                else
                    return manager.returnValue(true, -1);
            }
            else if (propertyName == "selectedColumnIndex") {
                if (table.selectedColumnIndex != null)
                    table.selectedColumnIndex;
                else
                    return manager.returnValue(true, -1);
            }
            else if (propertyName == "selectedCellLocation") {
                if (table.selectedCellLocation != null)
                    table.selectedCellLocation;
                else
                    return manager.returnValue(true, { x: -1, y: -1 });
            }
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_SET_PROPERTY) {

            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");
            var table = $designObjectElement.data("controllers.Table");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;

                if (propertyName == "locationX")
                    $designObjectElement.css("left", value + "px");
                else if (propertyName == "locationY")
                    $designObjectElement.css("top", value + "px");
                else if (propertyName == "width") {
                    $designObjectElement.css("width", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "height") {
                    $designObjectElement.css("height", value + "px");

                    var width = $designObjectElement.css("width");
                    var height = $designObjectElement.css("height");
                    $designObjectElement.css("background-size", width + "px " + height + " px");
                }
                else if (propertyName == "isDroppable") {
                    designObject.isDroppable = value;

                    if (value)
                        player.enableDesignObjectAsDroppable(id);
                    else
                        player.disableDesignObjectAsDroppable(id);
                }
                else if (propertyName == "isDraggable") {
                    designObject.isDraggable = value;

                    if (value)
                        player.enableDesignObjectAsDraggable(id);
                    else
                        player.disableDesignObjectAsDraggable(id);
                }
                else if (propertyName == "visible") {
                    designObject.visible = value;
                    if (value)
                        $designObjectElement.css("display", "block");
                    else
                        $designObjectElement.css("display", "none");
                }
                else if (propertyName == "enabled") {
                    designObject.enabled = value;

                    if (value)
                        $designObjectElement.removeAttr("disabled");
                    else
                        $designObjectElement.attr("disabled", "disabled");
                }
                else if (propertyName == "alpha") {
                    if (value < 0)
                        value = 0;
                    if (value > 100)
                        value = 100;
                    designObject.alpha = value;
                    value = parseFloat(value / 100);
                    $designObjectElement.css("opacity", value);
                }
                else if (propertyName == "className") {
                    var classNames = $designObjectElement.attr("class");
                    classNames = manager.setUserClass(classNames, value);
                    $designObjectElement.attr("class", classNames);
                }
                else if (propertyName == "tag")
                    designObject.tag = value;
                else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                    if (!value)
                        $designObjectElement.css("cursor", "default");
                    else
                        $designObjectElement.css("cursor", "pointer");

                    designObject.useHandCursor = value;
                }
                else if (propertyName == "selectedRowIndex") {
                    if (table.selectedRowIndex != null)
                        table.selectedRowIndex = value;
                }
                else if (propertyName == "selectedColumnIndex") {
                    if (table.selectedColumnIndex != null)
                        table.selectedColumnIndex = value;
                }
                else if (propertyName == "selectedCellLocation") {
                    if (table.selectedCellLocation != null)
                        table.selectedCellLocation = value;
                }
            }
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_CLEAR) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var tableSelector = $("#" + designObjectElementId);
            var tableFooterSelector = tableSelector.find("#" + designObjectElementId + "footer");
            var designObject = tableSelector.data("designObject");

            var rows = tableSelector.find("[rowType='content']");
            rows.remove();
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_ADD_ROW) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var tableSelector = designObjectSelector.find("table");
            var tableBodySelector = tableSelector.find("tbody");
            var designObject = designObjectSelector.data("designObject");
            var table = designObjectSelector.data("controllers.Table");

            var rowText = "<tr style='height:" + designObject.rowHeight + "px;' rowType='content'>";

            if (designObject.scrollMode == "vertical" && !designObject.autoHeight)
                rowText = "<tr style='height:" + designObject.rowHeight + "px; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;' rowType='content'>";


            for (var i = 0; i < designObject.columns.length; i++) {
                var column = designObject.columns[i];
                var widthMode = "auto";
                var tdStyleText = "-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;";

                if (designObject.scrollMode == "vertical" && !designObject.autoHeight) {
                    //tdStyleText += "border-collapse: collapse; border-spacing: 0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;";
                    var order = i + 1;

                    tdStyleText += "-webkit-box-ordinal-group:" + order + ";" +
                        "-moz-box-ordinal-group:" + order + ";" +
                        "-ms-flex-order:" + order + ";" +
                        "-webkit-order:" + order + ";" +
                        "order:" + order + ";";

                    if (column.widthMode == "fixed")
                        tdStyleText += "width:" + column.width + "px;" +
                            "-moz-box-flex: 1;";
                    else {
                        tdStyleText += "width:" + parseInt(100 / designObject.columns.length) + "%;" +
                            "-webkit-box-flex: 1;" +
                            "-moz-box-flex: 1;" +
                            "-webkit-flex: 1;" +
                            "-ms-flex: 1;" +
                            "flex: 1;";
                    }
                }

                rowText += "<td name='" + column.name + "' style='" + tdStyleText + "'></td>";
            }

            rowText += "</tr>";

            tableBodySelector.append(rowText);
            lastAddedTableRow = tableBodySelector.find("tr:last");

            this.AddStyling(block);
            table.refresh();
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_ADD_ROW_AT) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var designObjectSelector = $("#" + designObjectElementId);
            var tableSelector = designObjectSelector.find("table");
            var tableBodySelector = tableSelector.find("tbody");
            var designObject = designObjectSelector.data("designObject");
            var table = designObjectSelector.data("controllers.Table");

            var itemIndex = inputDefault.getItem("rowIndex");
            var rowIndex = "";
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    rowIndex = result.value;
            }


            var rowText = "<tr style='height:" + designObject.rowHeight + "px;' rowType='content'>";

            if (designObject.scrollMode == "vertical" && !designObject.autoHeight)
                rowText = "<tr style='height:" + designObject.rowHeight + "px; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;' rowType='content'>";

            for (var i = 0; i < designObject.columns.length; i++) {
                var column = designObject.columns[i];
                var widthMode = "auto";
                var tdStyleText = "";

                if (designObject.scrollMode == "vertical" && !designObject.autoHeight) {
                    var order = i + 1;

                    tdStyleText += "-webkit-box-ordinal-group:" + order + ";" +
                        "-moz-box-ordinal-group:" + order + ";" +
                        "-ms-flex-order:" + order + ";" +
                        "-webkit-order:" + order + ";" +
                        "order:" + order + ";";

                    if (column.widthMode == "fixed")
                        tdStyleText += "width:" + column.width + "px;" +
                            "-moz-box-flex: 1;";
                    else {
                        tdStyleText += "width:" + parseInt(100 / designObject.columns.length) + "%;" +
                            "-webkit-box-flex: 1;" +
                            "-moz-box-flex: 1;" +
                            "-webkit-flex: 1;" +
                            "-ms-flex: 1;" +
                            "flex: 1;";
                    }
                }

                rowText += "<td name='" + column.name + "' style='" + tdStyleText + "'></td>";
            }

            rowText += "</tr>";

            var rowLength = tableBodySelector.find("tr").length;
            if (rowIndex >= rowLength)
                $(tableBodySelector.find("tr")[rowIndex]).after(rowText);
            else
                $(tableBodySelector.find("tr")[rowIndex]).before(rowText);

            lastAddedTableRow = tableBodySelector.find("tr")[rowIndex];

            this.AddStyling(block);
            table.refresh();
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_REMOVE_ROW) {
            if (lastAddedTableRow != null)
                lastAddedTableRow.remove();
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_REMOVE_ROW_AT) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var tableSelector = $("#" + designObjectElementId);

            var itemIndex = inputDefault.getItem("rowIndex");
            var rowIndex = "";
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    rowIndex = result.value;
            }

            tableSelector.find("tr:nth-child(" + rowIndex + ")").remove()
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_SET_COLUMN_BY_INDEX) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var tableSelector = $("#" + designObjectElementId);
            var designObject = tableSelector.data("designObject");

            var itemIndex = inputDefault.getItem("columnIndex");
            var columnIndex = "";
            if (itemIndex.block != null) {
                var result = manager.executeBlock(itemIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    columnIndex = result.value;
            }

            var value = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            if (lastAddedTableRow != null) {
                var row = lastAddedTableRow;
                var columns = $(row).find("td");
                var column = columns[columnIndex];
                $(column).html(value);
            }
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_SET_COLUMN_BY_NAME) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var tableSelector = $("#" + designObjectElementId);
            var designObject = tableSelector.data("designObject");

            var itemName = inputDefault.getItem("columnName");
            var columnName = "";
            if (itemName.block != null) {
                var result = manager.executeBlock(itemName.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    columnName = result.value;
            }

            var value = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            if (columnName.trim() != '') {
                if (lastAddedTableRow != null) {
                    var row = lastAddedTableRow;
                    var $columns = $(row).find("td");
                    var column = $columns.filter("[name=" + columnName + "]");
                    $(column).html(value);
                }
            }
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_SET_COLUMN_AT_ROW_BY_INDEX) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var tableSelector = $("#" + designObjectElementId);
            var designObject = tableSelector.data("designObject");

            var itemColumnIndex = inputDefault.getItem("columnIndex");
            var columnIndex = "";
            if (itemColumnIndex.block != null) {
                var result = manager.executeBlock(itemColumnIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    columnIndex = result.value;
            }

            var itemRowIndex = inputDefault.getItem("rowIndex");
            var rowIndex = "";
            if (itemRowIndex.block != null) {
                var result = manager.executeBlock(itemRowIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    rowIndex = result.value;
            }

            var value = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }
            lastAddedTableRow = rowIndex;
            var row = tableSelector.find("tr")[rowIndex];
            var columns = $(row).find("td");
            var column = columns[columnIndex];
            $(column).html(value);
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_SET_FOOTER_TEXT) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var tableSelector = $("#" + designObjectElementId);
            var tableFooterSelector = tableSelector.find("#" + designObjectElementId + "_footer");
            var designObject = tableSelector.data("designObject");

            var value = "";
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    value = result.value;
            }

            tableFooterSelector.html(value);
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_SCROLL_TO_BOTTOM_ROW) {
            var inputDefault = block.getInput("default");
            var designObjectElementId = inputDefault.getItem("id").value;
            var tableSelector = $("#" + designObjectElementId);
            var tableBodySelector = tableSelector.find("tbody");
            var designObject = tableSelector.data("designObject");

            tableBodySelector.scrollTop(tableBodySelector.prop("scrollHeight"));
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_SET_SELECTED_CELL) {

            var inputDefault = block.getInput("columnIndex");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var table = $designObjectElement.data("controllers.Table");

            var columnIndex = block.getInput("columnIndex");
            var x = 0;
            if (columnIndex.block != null) {
                var result = manager.executeBlock(columnIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    x = parseInt(result.value);
            }

            var rowIndex = block.getInput("rowIndex");
            var y = 0;
            if (rowIndex.block != null) {
                var result = manager.executeBlock(rowIndex.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    y = parseInt(result.value);
            }

            var location = {x: x, y: y};

            table.selectedCellLocation = location;

        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_GET_SELECTED_COLUMN) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var table = $designObjectElement.data("controllers.Table");

            return manager.returnValue(true, table.selectedColumnIndex);
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_GET_SELECTED_ROW) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var table = $designObjectElement.data("controllers.Table");

            return manager.returnValue(true, table.selectedRowIndex);
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_CLEAR_SELECTION) {
            var inputDefault = block.getInput("default");
            var id = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + id);
            var table = $designObjectElement.data("controllers.Table");

            table.clearSelection();
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.TABLE_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    };

    this.AddStyling = function (block) {
        var inputDefault = block.getInput("default");
        var designObjectElementId = inputDefault.getItem("id").value;
        var designObjectSelector = $("#" + designObjectElementId);
        var tableSelector = designObjectSelector.find("table");
        var tableBodySelector = tableSelector.find("tbody");
        var designObject = designObjectSelector.data("designObject");
        var table = designObjectSelector.data("controllers.Table");

        tableBodySelector.find("td").removeClass();
        tableSelector.find("th").removeClass();
        tableBodySelector.find("tr").removeClass();

        if (designObject.tableColumnStyle == "default") {
            tableBodySelector.find("td").addClass("vfabrika-table-default-column-" + designObjectElementId);
            tableSelector.find("th").addClass("vfabrika-table-default-column-" + designObjectElementId);
        }
        else if (designObject.tableColumnStyle != null || designObject.tableColumnStyle != "") {
            tableBodySelector.find("td").addClass(designObject.tableColumnStyle);
            tableSelector.find("th").addClass(designObject.tableColumnStyle);
        }

        if (designObject.tableRowStyle == "default")
            tableBodySelector.find("tr").addClass("vfabrika-table-default-row-" + designObjectElementId);
        else if (designObject.tableRowStyle != null || designObject.tableRowStyle != "") {
            tableBodySelector.find("tr").addClass(designObject.tableRowStyle);
        }


        if (designObject.tableEvenRowStyle == "default") {
            var $rows = tableBodySelector.find("tr");
            for (var i = 0; i < tableBodySelector.find("tr").length; i++) {
                var rowSelector = $rows.eq(i);
                if (i % 2 == 0)
                    rowSelector.addClass("vfabrika-table-default-even-row-" + designObjectElementId);
            }
        }
        else if (designObject.tableEvenRowStyle != null || designObject.tableEvenRowStyle != "") {
            var $rows = tableBodySelector.find("tr");
            for (var i = 0; i < tableBodySelector.find("tr").length; i++) {
                var rowSelector = $rows.eq(i);
                if (i % 2 == 0)
                    rowSelector.addClass(designObject.tableEvenRowStyle);
            }
        }

        if (designObject.tableOddRowStyle == "default") {
            var $rows = tableBodySelector.find("tr");
            for (var i = 0; i < tableBodySelector.find("tr").length; i++) {
                var rowSelector = $rows.eq(i);
                if (i % 2 != 0)
                    rowSelector.addClass("vfabrika-table-default-odd-row-" + designObjectElementId);
            }
        }
        else if (designObject.tableOddRowStyle != null || designObject.tableOddRowStyle != "") {
            var $rows = tableBodySelector.find("tr");
            for (var i = 0; i < tableBodySelector.find("tr").length; i++) {
                var rowSelector = $rows.eq(i);
                if (i % 2 != 0)
                    rowSelector.addClass(designObject.tableOddRowStyle);
            }
        }
    };

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_CLEAR);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_ADD_ROW);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_ADD_ROW_AT);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_REMOVE_ROW);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_REMOVE_ROW_AT);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_SET_FOOTER_TEXT);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_SET_COLUMN_BY_INDEX);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_SET_COLUMN_BY_NAME);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_SET_COLUMN_AT_ROW_BY_INDEX);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_SCROLL_TO_BOTTOM_ROW);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_SET_SELECTED_CELL);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_GET_SELECTED_COLUMN);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_GET_SELECTED_ROW);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_CLEAR_SELECTION);    
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.TABLE_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function TextDesignObjectController(player, playerData) {
    var DesignObjectType = {
        TEXT: "text"
    };

    var TextDesignObjectPropertyName = {
        FONT_COLOR: "fontColor",
        FONT_SIZE: "fontSize",
        FONT_NAME: "fontName",
        FONT_ATTRIBUTES: "fontAttributes",
        CHECKED: "checked",
        TEXT: "text"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.TEXT) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            //Bug fix position:absolute removed from line Below.
            var designObjectElementText = "<div id='" + designObjectElementId + "'><span id='" + designObjectElementId + "_span' style='position: absolute;width:100%;height: 100%;display: block;'></span></div>";
            var $designObjectElement = $(designObjectElementText);
            return $designObjectElement;
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.TEXT) {
            var designObjectSpanElementId = designObject.id == '' ? designObject.uniqueId + "_span" : designObject.id + "_span";
            var $designObjectSpanElement = $("#" + designObjectSpanElementId);

            $designObjectSpanElement.html(designObject.htmlText);
            //$designObjectElement.css("overflow", "hidden");
            $designObjectElement.css("-webkit-transform", "translate3d(0, 0, 0)");
            $designObjectElement.css("transform", "translate3d(0, 0, 0)");
            $designObjectElement.css("word-wrap", "break-word");

            if (designObject.clippingBehaviour == "clip")
                $designObjectElement.css("overflow", "hidden");
            else if (designObject.clippingBehaviour == "none")
                $designObjectElement.css("overflow", "visible");
            else if (designObject.clippingBehaviour == "scroll")
                $designObjectElement.css("overflow", "auto");
        }
    };

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.frameUpdate = function ($designObjectElement, designObject) {
        var location = { x: designObject.x, y: designObject.y };
        var size = { width: designObject.width, height: designObject.height };
        var alpha = designObject.alpha;
        var rotation = designObject.rotation;
        var pivotLocation = designObject.pivotLocation;

        DesignObjectHelper.setLocation($designObjectElement, location);
        DesignObjectHelper.setSize($designObjectElement, size);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, alpha);
        DesignObjectHelper.setRotation($designObjectElement, size, rotation, pivotLocation);
    }

    this.applyProperties = function ($designObjectElement, designObject) {
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
    }

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == TextDesignObjectPropertyName.TEXT.toLowerCase()) {
                return designObject.text;
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_COLOR.toLowerCase()) {
                return DesignObjectHelper.rgbToHex($designObjectElement.css("color"));
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_SIZE.toLowerCase()) {
                return parseInt($designObjectElement.css("font-size").replace("px", ""));
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_NAME.toLowerCase()) {
                return $designObjectElement.css("font-family");
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_ATTRIBUTES.toLowerCase()) {
                if (typeof (designObject.fontAttributes) !== "undefined")
                    return manager.returnValue(true, designObject.fontAttributes);
                else
                    return manager.returnValue(true, undefined);
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == TextDesignObjectPropertyName.TEXT.toLowerCase()) {
                designObject.text = value;
                var $designObjectSpanElement = $("#" + designObject.id + "_span");
                $designObjectSpanElement.html(value);
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_COLOR.toLowerCase()) {
                $designObjectElement.find("*").css("color", value);
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_SIZE.toLowerCase()) {
                $designObjectElement.find("*").css("font-size", value);
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_NAME.toLowerCase()) {
                $designObjectElement.find("*").css("font-family", value);
            } else if (propertyName.toLowerCase() == TextDesignObjectPropertyName.FONT_ATTRIBUTES.toLowerCase()) {
                designObject.fontAttributes = value;

                if (value["bold"] == true)
                    $designObjectElement.find("*").css("font-weight", "bold");
                else
                    $designObjectElement.find("*").css("font-weight", "normal");

                if (value["italic"] == true)
                    $designObjectElement.find("*").css("font-style", "italic");
                else
                    $designObjectElement.find("*").css("font-style", "normal");
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.TEXT);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function TextDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Text";

    var BlockType = {
        TEXT_DESIGN_OBJECT_GET_PROPERTY: "textDesignObjectGetProperty",
        TEXT_DESIGN_OBJECT_SET_PROPERTY: "textDesignObjectSetProperty",
        TEXT_DESIGN_OBJECT_ON_MOUSE_EVENT: "textDesignObjectOnMouseEvent",
        TEXT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT: "textDesignObjectOnDragAndDropEvent",
        TEXT_DESIGN_OBJECT_ON_DRAG_EVENT: "textDesignObjectOnDragEvent",
        TEXT_DESIGN_OBJECT_GET_DRAG_OBJECT: "textDesignObjectGetDragObject",
        TEXT_DESIGN_OBJECT_GET_DRAG_OBJECT_ID: "textDesignObjectGetDragObjectId",
        TEXT_DESIGN_OBJECT_GET_DROP_OBJECT: "textDesignObjectGetDropObject",
        TEXT_DESIGN_OBJECT_GET_DROP_OBJECT_ID: "textDesignObjectGetDropObjectId",
        TEXT_DESIGN_OBJECT_ADD_CLASS: "textDesignObjectAddClass",
        TEXT_DESIGN_OBJECT_REMOVE_CLASS: "textDesignObjectRemoveClass"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.TEXT_DESIGN_OBJECT_ON_MOUSE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                        }
                        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
                            var inputDefault = block.getInput("default");
                            var id = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + id);

                            var dropProxyObject = player.createDropHandlerForDesignObject(id);
                            $(dropProxyObject).on("drop", { "block": block }, onDrop);
                        }
                        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_ON_DRAG_EVENT) {
                            var inputDefault = block.getInput("default");
                            var designObjectId = inputDefault.getItem("id").value;
                            var $designObjectElement = $("#" + designObjectId);
                            var eventName = inputDefault.getItem("eventName").value;

                            if (designObjectId != "" && eventName != "") {
                                player.createDragMembersForDesignObject(designObjectId);
                                var dragHandler = $designObjectElement.data("controllers.dragHandler");
                                $(dragHandler).on(eventName, { "block": block }, onDrag);
                            }
                        }
                    }
                }
            }
        }
    }

    var onDrop = function (e, dropObj, dragObj) {
        var block = e.data.block;

        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj);
        eventVariables.add("dropObject", dropObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    var onDrag = function (e, dragObj) {
        var block = e.data.block;
        var eventVariables = manager.createVariables();
        eventVariables.add("dragObject", dragObj.designObject);

        manager.executeBlock(block, eventVariables, manager.createVariables(), true, manager.createFlowState());
    };

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.TEXT_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "locationX")
                return manager.returnValue(true, parseInt($designObjectElement.css("left").replace("px", "")));
            else if (propertyName == "locationY")
                return manager.returnValue(true, parseInt($designObjectElement.css("top").replace("px", "")));
            else if (propertyName == "width")
                return manager.returnValue(true, parseInt($designObjectElement.css("width").replace("px", "")));
            else if (propertyName == "height")
                return manager.returnValue(true, parseInt($designObjectElement.css("height").replace("px", "")));
            else if (propertyName == "rotation")
                return manager.returnValue(true, designObject.rotation);
            else if (propertyName == "isDroppable")
                return manager.returnValue(true, designObject.isDroppable);
            else if (propertyName == "isDraggable")
                return manager.returnValue(true, designObject.isDraggable);
            else if (propertyName == "visible")
                return manager.returnValue(true, designObject.visible);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
            else if (propertyName == "alpha")
                return manager.returnValue(true, parseInt(designObject.alpha));
            else if (propertyName == "className")
                return manager.returnValue(true, manager.getUserClass($designObjectElement.attr("class")));
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "text")
                return manager.returnValue(true, designObject.text);
            else if (propertyName.toLowerCase() == "fontcolor")
                return manager.returnValue(true, DesignObjectHelper.rgbToHex($designObjectElement.css("color")));
            else if (propertyName.toLowerCase() == "fontsize")
                return manager.returnValue(true, $designObjectElement.css("font-size").replace("px",""));
            else if (propertyName.toLowerCase() == "fontname")
                return manager.returnValue(true, $designObjectElement.css("font-family"));
            else if (propertyName.toLowerCase() == "fontattributes") {
                if (typeof (designObject.fontAttributes) !== "undefined")
                    return manager.returnValue(true, designObject.fontAttributes);
                else
                    return manager.returnValue(true, undefined);
            }
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return manager.returnValue(true, designObject.useHandCursor);
            else if (propertyName == "checked") {
                return manager.returnValue(true, $designObjectElement.attr("checked") != undefined);
            }
        }
            // image_design_object_set_property
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");

            var id = inputDefault.getItem("id").value;
            var propertyName = inputDefault.getItem("propertyName").value;

            var $designObjectElement = $("#" + id);
            var $designObjectSpanElement = $("#" + id + "_span");
            var designObjectElement = $designObjectElement[0];
            var designObject = $designObjectElement.data("designObject");

            var value = null;
            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    value = result.value;

                    if (propertyName.toLowerCase() == "locationx")
                        $designObjectElement.css("left", value + "px");
                    else if (propertyName.toLowerCase() == "locationy")
                        $designObjectElement.css("top", value + "px");
                    else if (propertyName.toLowerCase() == "width") {
                        $designObjectElement.css("width", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName.toLowerCase() == "height") {
                        $designObjectElement.css("height", value + "px");

                        var width = $designObjectElement.css("width");
                        var height = $designObjectElement.css("height");
                        $designObjectElement.css("background-size", width + "px " + height + " px");
                    }
                    else if (propertyName.toLowerCase() == "rotation") {
                        designObject.rotation = value;
                        DesignObjectHelper.applyRotation($designObjectElement, designObject);
                    }
                    else if (propertyName.toLowerCase() == "isdroppable") {
						designObject.isDroppable = value;

						if (value)
							player.enableDesignObjectAsDroppable(id);
						else
							player.disableDesignObjectAsDroppable(id);
                    }
                    else if (propertyName.toLowerCase() == "isdraggable") {
                        designObject.isDraggable = value;

						if (value)
							player.enableDesignObjectAsDraggable(id);
						else
							player.disableDesignObjectAsDraggable(id);
                    }
                    else if (propertyName.toLowerCase() == "visible") {
                        designObject.visible = value;
                        if (value)
                            $designObjectElement.css("display", "block");
                        else
                            $designObjectElement.css("display", "none");
                    }
                    else if (propertyName.toLowerCase() == "enabled") {
                        designObject.enabled = value;

                        if (value)
                            $designObjectElement.removeAttr("disabled");
                        else
                            $designObjectElement.attr("disabled", "disabled");
                    }
                    else if (propertyName.toLowerCase() == "alpha") {
                        if (value < 0)
                            value = 0;
                        if (value > 100)
                            value = 100;
                        designObject.alpha = value;
                        value = parseFloat(value / 100);
                        $designObjectElement.css("opacity", value);
                    }
                    else if (propertyName.toLowerCase() == "className") {
                        var classNames = $designObjectElement.attr("class");
                        classNames = manager.setUserClass(classNames, value);
                        $designObjectElement.attr("class", classNames);
                    }
                    else if (propertyName.toLowerCase() == "tag")
                        designObject.tag = value;
                    else if (propertyName.toLowerCase() == "text") {
                        designObject.text = value;
                        $designObjectSpanElement.html(value);
                    }
                    else if (propertyName.toLowerCase() == "fontcolor")
                        $designObjectElement.find("*").css("color", value);
                    else if (propertyName.toLowerCase() == "fontsize")
                        $designObjectElement.find("*").css("font-size", value);
                    else if (propertyName.toLowerCase() == "fontname") 
                        $designObjectElement.find("*").css("font-family", value);
                    else if (propertyName.toLowerCase() == "fontattributes") {
                        designObject.fontAttributes = value;

                        if (value["bold"] == true)
                            $designObjectElement.find("*").css("font-weight", "bold");
                        else
                            $designObjectElement.find("*").css("font-weight", "normal");

                        if (value["italic"] == true)
                            $designObjectElement.find("*").css("font-style", "italic");
                        else
                            $designObjectElement.find("*").css("font-style", "normal");
                    }
                    else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                        if (!value)
                            $designObjectElement.css("cursor", "default");
                        else
                            $designObjectElement.css("cursor", "pointer");

                        designObject.useHandCursor = value;
                    }
                }
            }
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_ON_MOUSE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            var dropObject = eventVariables.getValue("dropObject");

            scopeVariables_.push(manager.createVariable("dragObject", dragObject));
            scopeVariables_.push(manager.createVariable("dropObject", dropObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_ON_DRAG_EVENT) {
            var scopeVariables_ = manager.cloneScopeVariables(scopeVariables);

            var dragObject = eventVariables.getValue("dragObject");
            scopeVariables_.push(manager.createVariable("dragObject", dragObject));

            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables_, true, flowState);
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_GET_DRAG_OBJECT) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject);
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_GET_DRAG_OBJECT_ID) {
            var dragObjectElement = eventVariables.getValue("dragObject");
            var dragObject = $(dragObjectElement).data("designObject");
            return manager.returnValue(true, dragObject.id);
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_GET_DROP_OBJECT) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject);
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_GET_DROP_OBJECT_ID) {
            var dropObject = eventVariables.getValue("dropObject");
            return manager.returnValue(true, dropObject.id);
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_ADD_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.find("span").addClass(result.value);
                }
            }
        }
        else if (block.type == BlockType.TEXT_DESIGN_OBJECT_REMOVE_CLASS) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);

            if (inputDefault.block != null) {
                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    $designObjectElement.find("span").removeClass(result.value);
                }
            }
        }

        return manager.returnValue(false);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_GET_PROPERTY);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_ON_MOUSE_EVENT);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_ON_DRAG_AND_DROP_EVENT);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_ON_DRAG_EVENT);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_GET_DRAG_OBJECT);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_GET_DRAG_OBJECT_ID);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_GET_DROP_OBJECT);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_GET_DROP_OBJECT_ID);

    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_ADD_CLASS);
    this.blockTypes.push(BlockType.TEXT_DESIGN_OBJECT_REMOVE_CLASS);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function TimerDesignObjectController(player, playerData) {
    var DesignObjectType = {
        TIMER: "timer"
    };

    var TimerDesignObjectPropertyName = {
        INTERVAL: "interval"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.TIMER) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            return $(designObjectElementText);
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.TIMER) {
            var timer = new Timer();
            timer.interval = designObject.interval;
            $designObjectElement.data("controllers.timer", timer);
        }
    }

    this.showElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.TIMER) {
            if (designObject.isAutoStart) {
                var timer = $designObjectElement.data("controllers.timer");
                timer.start();
            }
        }
    }

    this.hideElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.TIMER) {
            var timer = $designObjectElement.data("controllers.timer");
            if (timer.isActive)
                timer.stop();
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == TimerDesignObjectPropertyName.INTERVAL.toLowerCase()) {
                return designObject.interval;
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == TimerDesignObjectPropertyName.INTERVAL.toLowerCase()) {
                var timer = $designObjectElement.data("controllers.timer");
                timer.updateInterval(value);
                designObject.interval = value;
            }
        }
    }
    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.TIMER);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }

}
function DelayDesignObjectController(player, playerData) {
    var DesignObjectType = {
        DELAY: "delay"
    };

    var DelayDesignObjectPropertyName = {
        INTERVAL: "interval"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.DELAY) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            return $(designObjectElementText);
        }
    }

    this.initializeElement = function (designObjectUniqueIds, $designObjectElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.DELAY) {
            var delay = new Delay();
            delay.interval = designObject.interval;
            $designObjectElement.data("controllers.delay", delay);
        }
    }

    this.showElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.DELAY) {
            if (designObject.isAutoStart) {
                var delay = $designObjectElement.data("controllers.delay");
                delay.start();
            }
        }
    }

    this.hideElement = function ($designObjectElement, designObject) {
        if (designObject.type == DesignObjectType.DELAY) {
            var delay = $designObjectElement.data("controllers.delay");
            if (delay.isActive)
                delay.stop();
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName.toLowerCase() == DelayDesignObjectPropertyName.INTERVAL.toLowerCase()) {
                return designObject.interval;
            }
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        var result = DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
        if (!result) {
            if (propertyName.toLowerCase() == DelayDesignObjectPropertyName.INTERVAL.toLowerCase()) {
                var delay = $designObjectElement.data("controllers.delay");
                delay.updateInterval(value);
                designObject.interval = value;
            }
        }
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.DELAY);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function TimerDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Timer";

    var BlockType = {
        TIMER_DESIGN_OBJECT_EVENT: "timerDesignObjectEvent",
        TIMER_DESIGN_OBJECT_CONTROL: "timerDesignObjectControl",
        TIMER_DESIGN_OBJECT_SET_PROPERTY: "timerDesignObjectSetProperty",
        TIMER_DESIGN_OBJECT_GET_PROPERTY: "timerDesignObjectGetProperty"
    };

    var timers = new Array();

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.TIMER_DESIGN_OBJECT_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                if (block.type == BlockType.TIMER_DESIGN_OBJECT_EVENT) {
                                    var $designObjectElement = $("#" + designObjectId);
                                    var timer = $designObjectElement.data("controllers.timer");
                                    $(timer).on(eventName, { "block": block }, onTimerEvent);
                                } else {
                                    var eventName_ = "";

                                    if (eventName == "mousedown")
                                        eventName_ = Sbt.Actions.down;
                                    else if (eventName == "mouseup")
                                        eventName_ = Sbt.Actions.up;
                                    else if (eventName == "mousemove")
                                        eventName_ = Sbt.Actions.move;
                                    else if (eventName == "click")
                                        eventName_ = Sbt.Actions.click;
                                    else
                                        eventName_ = eventName;

                                    if (eventName_ != "")
                                        $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    var onTimerEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.TIMER_DESIGN_OBJECT_EVENT) {
            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
        }
        else if (block.type == BlockType.TIMER_DESIGN_OBJECT_CONTROL) {
            var inputDefault = block.getInput("default");

            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var designObject = $designObjectElement.data("designObject");

            var command = inputDefault.getItem("command").value;
            if (command == "start") {
                var timer = $designObjectElement.data("controllers.timer");
                timer.start();
            } else if (command == "stop") {
                var timer = $designObjectElement.data("controllers.timer");
                timer.stop();
            }
        }
        else if (block.type == BlockType.TIMER_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");
            var propertyName = inputDefault.getItem("propertyName").value;

            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "interval") {
                var timer = $designObjectElement.data("controllers.timer");

                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result.hasReturnValue) {
                    timer.updateInterval(result.value);
                    designObject.interval = result.value;
                }
            }
            else if (propertyName == "enabled") {
                designObject.enabled = value;

                if (value)
                    $designObjectElement.removeAttr("disabled");
                else
                    $designObjectElement.attr("disabled", "disabled");
            }
            else if (propertyName == "tag")
                designObject.tag = value;
        }
        else if (block.type == BlockType.TIMER_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");
            var propertyName = inputDefault.getItem("propertyName").value;

            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "interval")
                return manager.returnValue(true, designObject.interval);
            else if (propertyName == "isActive") {
                var timer = $designObjectElement.data("controllers.timer");
                return manager.returnValue(true, timer.isActive);
            }
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
        }

        return manager.returnValue(false);
    }

    // constructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.TIMER_DESIGN_OBJECT_CONTROL);
    this.blockTypes.push(BlockType.TIMER_DESIGN_OBJECT_EVENT);
    this.blockTypes.push(BlockType.TIMER_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.TIMER_DESIGN_OBJECT_GET_PROPERTY);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function DelayDesignObjectBlocksController(manager, player, playerData) {
    this.name = "Delay";

    var BlockType = {
        DELAY_DESIGN_OBJECT_EVENT: "delayDesignObjectEvent",
        DELAY_DESIGN_OBJECT_CONTROL: "delayDesignObjectControl",
        DELAY_DESIGN_OBJECT_SET_PROPERTY: "delayDesignObjectSetProperty",
        DELAY_DESIGN_OBJECT_GET_PROPERTY: "delayDesignObjectGetProperty"
    };

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.DELAY_DESIGN_OBJECT_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                if (block.type == BlockType.DELAY_DESIGN_OBJECT_EVENT) {
                                    var $designObjectElement = $("#" + designObjectId);
                                    var delay = $designObjectElement.data("controllers.delay");
                                    $(delay).on(eventName, { "block": block }, onDelayEvent);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    var onDelayStarted = function (e) {
        var block = e.data.block;
    }

    var onDelayStopped = function (e) {
        var block = e.data.block;

    }

    var onDelayCompleted = function (e) {
        var block = e.data.block;

    }

    var onDelayEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.DELAY_DESIGN_OBJECT_EVENT) {
            var inputBlock = block.getInput("block");
            if (inputBlock.flowBlock != null)
                manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
        }
        else if (block.type == BlockType.DELAY_DESIGN_OBJECT_CONTROL) {

            var inputDefault = block.getInput("default");

            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var designObject = $designObjectElement.data("designObject");

            var command = inputDefault.getItem("command").value;
            if (command == "start") {
                var delay = $designObjectElement.data("controllers.delay");
                delay.start();
            } else if (command == "stop") {
                var delay = $designObjectElement.data("controllers.delay");
                delay.stop();
            }
        }
        else if (block.type == BlockType.DELAY_DESIGN_OBJECT_SET_PROPERTY) {
            var inputDefault = block.getInput("default");
            var propertyName = inputDefault.getItem("propertyName").value;

            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "interval") {
                var delay = $designObjectElement.data("controllers.delay");

                var result = manager.executeBlock(inputDefault.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue) {
                    delay.updateInterval(result.value);
                    designObject.interval = result.value;
                }
            }
            else if (propertyName == "enabled") {
                designObject.enabled = value;

                if (value)
                    $designObjectElement.removeAttr("disabled");
                else
                    $designObjectElement.attr("disabled", "disabled");
            }
            else if (propertyName == "tag")
                designObject.tag = value;
        }
        else if (block.type == BlockType.DELAY_DESIGN_OBJECT_GET_PROPERTY) {
            var inputDefault = block.getInput("default");
            var propertyName = inputDefault.getItem("propertyName").value;
            var designObjectId = inputDefault.getItem("id").value;
            var $designObjectElement = $("#" + designObjectId);
            var designObject = $designObjectElement.data("designObject");

            if (propertyName == "interval")
                return manager.returnValue(true, designObject.interval);
            else if (propertyName == "isActive") {
                var delay = $designObjectElement.data("controllers.delay");
                return manager.returnValue(true, delay.isActive);
            }
            else if (propertyName == "tag")
                return manager.returnValue(true, designObject.tag);
            else if (propertyName == "enabled")
                return manager.returnValue(true, designObject.enabled);
        }

        return manager.returnValue(false);
    }

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.DELAY_DESIGN_OBJECT_CONTROL);
    this.blockTypes.push(BlockType.DELAY_DESIGN_OBJECT_EVENT);
    this.blockTypes.push(BlockType.DELAY_DESIGN_OBJECT_SET_PROPERTY);
    this.blockTypes.push(BlockType.DELAY_DESIGN_OBJECT_GET_PROPERTY);
     
    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function TriggerDesignObjectController(player, playerData) {
    var DesignObjectType = {
        TRIGGER: "trigger"
    };

    this.createElement = function (designObjectUniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        if (designObject.type == DesignObjectType.TRIGGER) {
            var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;
            var designObjectElementText = "<div id='" + designObjectElementId + "'></div>";
            return $(designObjectElementText);
        }
    }

    this.frameTween = function (layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject) {
        var tweenLocation = DesignObjectHelper.calculateTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenSize = DesignObjectHelper.calculateTweenSize(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenAlpha = DesignObjectHelper.calculateTweenAlpha(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenRotation = DesignObjectHelper.calculateTweenRotation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);
        var tweenPivotLocation = DesignObjectHelper.calculatePivotTweenLocation(keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime);

        DesignObjectHelper.setLocation($designObjectElement, tweenLocation);
        DesignObjectHelper.setSize($designObjectElement, tweenSize);
        DesignObjectHelper.setAlpha($designObjectElement, designObject, tweenAlpha);
        DesignObjectHelper.setRotation($designObjectElement, tweenSize, tweenRotation, tweenPivotLocation);
    };

    this.getProperty = function (designObject, $designObjectElement, propertyName) {
        var result = DesignObjectBlocksControllerHelper.getProperty(designObject, $designObjectElement, propertyName);
        if (result != null && result.hasReturnValue)
            return result.value;
        else {
            if (propertyName == "text")
                return $designObjectElement.val();
        }
    }

    this.setProperty = function (designObject, $designObjectElement, propertyName, value) {
        DesignObjectBlocksControllerHelper.setProperty(designObject, $designObjectElement, propertyName, value);
    }

    // constructor
    this.designObjectTypes = new Array();

    this.designObjectTypes.push(DesignObjectType.TRIGGER);

    this.hasDesignObjectType = function (designObjectType) {
        for (var i = 0; i < this.designObjectTypes.length; i++)
            if (this.designObjectTypes[i] == designObjectType)
                return true;

        return false;
    }
}
function TriggerDesignObjectBlocksController(manager, player, playerData) {
    var self = this;

    this.name = "Trigger";

    var BlockType = {
        TRIGGER_DESIGN_OBJECT_ON_INVOKE_EVENT: "triggerDesignObjectOnInvokeEvent"
    }

    this.preInitialize = function () {

    }

    this.initialize = function () {
        initializeEvents();
    }

    var initializeEvents = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        if (block.type == BlockType.TRIGGER_DESIGN_OBJECT_ON_INVOKE_EVENT) {
                            var designObjectId = "";
                            var eventName = "";

                            // design object name
                            var blockInput = block.getInput("default");
                            if (blockInput != null) {
                                var blockInputItem = blockInput.getItem("id");
                                if (blockInputItem != null)
                                    designObjectId = blockInputItem.value;

                                blockInputItem = blockInput.getItem("eventName");
                                if (blockInputItem != null)
                                    eventName = blockInputItem.value;
                            }

                            if (designObjectId != "") {
                                var eventName_ = "";

                                if (eventName == "mousedown")
                                    eventName_ = Sbt.Actions.down;
                                else if (eventName == "mouseup")
                                    eventName_ = Sbt.Actions.up;
                                else if (eventName == "mousemove")
                                    eventName_ = Sbt.Actions.move;
                                else if (eventName == "click")
                                    eventName_ = Sbt.Actions.click;
                                else
                                    eventName_ = eventName;

                                if (eventName_ != "")
                                    $("#" + designObjectId).on(eventName_, { "block": block }, onBlockEvent);
                            }
                        }
                    }
                }
            }
        }
    }

    var onBlockEvent = function (e) {
        var block = e.data.block;
        manager.executeBlock(block, manager.createVariables(), manager.createVariables(), true, manager.createFlowState());
    }

    this.postInitialize = function () {

    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.TRIGGER_DESIGN_OBJECT_ON_INVOKE_EVENT) {
            var inputDefault = block.getInput("default");
            var designObjectId = inputDefault.getItem("id").value;
            var designObjectElement = $("#" + designObjectId);
            var eventName = inputDefault.getItem("eventName").value;

            // this is an exceptional block for click event disabled state of dom element
            if (eventName == "click" && designObjectElement != null) {
                if (designObjectElement.attr("disabled") != "disabled") {
                    var inputBlock = block.getInput("block");
                    if (inputBlock.flowBlock != null)
                        manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
                }
            } else {
                var inputBlock = block.getInput("block");
                if (inputBlock.flowBlock != null)
                    manager.executeBlock(inputBlock.flowBlock, eventVariables, scopeVariables, true, flowState);
            }
        }

        return manager.returnValue(false);
    }

    // constructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.TRIGGER_DESIGN_OBJECT_ON_INVOKE_EVENT);

    this.hasBlockType = function (blockType) {
        for (var blockType_ in this.blockTypes)
            if (blockType_ == blockType)
                return true;

        return false;
    }

    // constructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.TRIGGER_DESIGN_OBJECT_ON_INVOKE_EVENT);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
function TrigonometryBlocksController(manager, player, playerData) {
    this.name = "Trigonometry";

    var BlockType = {
        TRIGONOMETRY_DEGREE_TO_RADIAN: "trigonometryDegreeToRadian",
        TRIGONOMETRY_RADIAN_TO_DEGREE: "trigonometryRadianToDegree",
        TRIGONOMETRY_VECTOR2D_CREATE: "trigonometryVector2dCreate",
        TRIGONOMETRY_VECTOR2D_ADD: "trigonometryVector2dAdd",
        TRIGONOMETRY_VECTOR2D_ANGLE: "trigonometryVector2dAngle",
        TRIGONOMETRY_VECTOR2D_AREA_OF_POINTS: "trigonometryVector2dAreaOfPoints",
        TRIGONOMETRY_VECTOR2D_CENTER_OF_POINTS: "trigonometryVector2dCenterOfPoints",
        TRIGONOMETRY_VECTOR2D_CROSS_PRODUCT: "trigonometryVector2dCrossProduct",
        TRIGONOMETRY_VECTOR2D_DISTANCE: "trigonometryVector2dDistance",
        TRIGONOMETRY_VECTOR2D_DIVIDE: "trigonometryVector2dDivide",
        TRIGONOMETRY_VECTOR2D_DOT_PRODUCT: "trigonometryVector2dDotProduct",
        TRIGONOMETRY_VECTOR2D_EQUALITY: "trigonometryVector2dEqual",
        TRIGONOMETRY_VECTOR2D_INVERSE: "trigonometryVector2dInverse",
        TRIGONOMETRY_VECTOR2D_IS_ZERO_VECTOR: "trigonometryVector2dIsZeroVector",
        TRIGONOMETRY_VECTOR2D_MAGNITUDE: "trigonometryVector2dMagnitude",
        TRIGONOMETRY_VECTOR2D_MULTIPLY: "trigonometryVector2dMultiply",
        TRIGONOMETRY_VECTOR2D_NORMALIZE: "trigonometryVector2dNormalize",
        TRIGONOMETRY_VECTOR2D_ROTATE_DEGREE: "trigonometryVector2dRotateDegree",
        TRIGONOMETRY_VECTOR2D_SET_LENGTH: "trigonometryVector2dSetVectorLenght",
        TRIGONOMETRY_VECTOR2D_SORT_POINTS_BY_ANGLE: "trigonometryVector2dSortPointsByAngle",
        TRIGONOMETRY_VECTOR2D_SUBTRACT: "trigonometryVector2dSubtract"

    };

    this.preInitialize = function () {

    };

    this.initialize = function () {

    };

    this.postInitialize = function () {

    };

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        if (block.type == BlockType.TRIGONOMETRY_DEGREE_TO_RADIAN) {
            var inputValue = block.getInput("default");
            if (inputValue.block != null) {
                var result = manager.executeBlock(inputValue.block, eventVariables, scopeVariables, false, flowState);
                return manager.returnValue(true, MathHelper.toRadian(result.value));
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.TRIGONOMETRY_RADIAN_TO_DEGREE) {
            var inputValue = block.getInput("default");
            if (inputValue.block != null) {
                var result = manager.executeBlock(inputValue.block, eventVariables, scopeVariables, false, flowState);
                return manager.returnValue(true, MathHelper.toDegree(result.value));
            }
            else
                return manager.returnValue(true, null);
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_CREATE) {
            var inputValue = block.getInput("default");

            var valueX = 0;
            var inputItemValueX = inputValue.getItem("valueX");
            if (inputItemValueX.block != null){
                //noinspection JSDuplicatedDeclaration
                var result = manager.executeBlock(inputItemValueX.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    valueX = result.value;
            }

            var valueY = 0;
            var inputItemValueY = inputValue.getItem("valueY");
            if (inputItemValueY.block != null) {
                var result = manager.executeBlock(inputItemValueY.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    valueY = result.value;
            }

            return manager.returnValue(true, new Vector2(valueX, valueY));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_ADD) {
            var inputValue = block.getInput("default");

            var vector1 = new Vector2(0, 0);
            var inputItemVector1 = inputValue.getItem("vector1");
            if (inputItemVector1.block != null) {
                var result = manager.executeBlock(inputItemVector1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector1 = result.value;
            }

            var vector2 = new Vector2(0, 0);
            var inputItemVector2 = inputValue.getItem("vector2");
            if (inputItemVector2.block != null){
                var result = manager.executeBlock(inputItemVector2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector2 = result.value;
            }

            return manager.returnValue(true, new Vector2.add(vector1, vector2));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_ANGLE) {
            var inputValue = block.getInput("default");

            var vector1 = new Vector2(0, 0);
            var inputItemVector1 = inputValue.getItem("vector1");
            if (inputItemVector1.block != null){
                var result = manager.executeBlock(inputItemVector1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector1 = result.value;
            }

            var vector2 = new Vector2(0, 0);
            var inputItemVector2 = inputValue.getItem("vector2");
            if (inputItemVector2.block != null){
                var result = manager.executeBlock(inputItemVector2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector2 = result.value;
            }

            var angleType = inputValue.getItem("angleType").value;
            if (angleType == "180_signed")
                return manager.returnValue(true, Vector2.angleSigned(vector1, vector2));
            else if (angleType == "180_unsigned")
                return manager.returnValue(true, Vector2.angleUnsigned(vector1, vector2));
            else if (angleType == "360")
                return manager.returnValue(true, Vector2.angle360(vector1, vector2));
            else
                throw new Error("Angle type is not defined! Error on [" + block.type + "]");
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_AREA_OF_POINTS) {
            var inputValue = block.getInput("default");

            var points = null;

            var inputItemPoints = inputValue.getItem("points");
            if (inputItemPoints.block != null){
                var result = manager.executeBlock(inputItemPoints.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    points = result.value;
            }

            if (points != null)
                return manager.returnValue(true, Vector2.areaOfPoints(points));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_CENTER_OF_POINTS) {
            var inputValue = block.getInput("default");

            var points = null;

            var inputItemPoints = inputValue.getItem("points");
            if (inputItemPoints.block != null){
                var result = manager.executeBlock(inputItemPoints.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    points = result.value;
            }

            if (points != null)
                return manager.returnValue(true, Vector2.centerOfPoints(points));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_CROSS_PRODUCT) {
            var inputValue = block.getInput("default");

            var vector1 = new Vector2(0, 0);
            var inputItemVector1 = inputValue.getItem("vector1");
            if (inputItemVector1.block != null){
                var result = manager.executeBlock(inputItemVector1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector1 = result.value;
            }

            var vector2 = new Vector2(0, 0);
            var inputItemVector2 = inputValue.getItem("vector2");
            if (inputItemVector2.block != null){
                var result = manager.executeBlock(inputItemVector2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector2 = result.value;
            }

            return manager.returnValue(true, Vector2.cross(vector1, vector2));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_DISTANCE) {
            var inputValue = block.getInput("default");

            var vector1 = new Vector2(0, 0);
            var inputItemVector1 = inputValue.getItem("vector1");
            if (inputItemVector1.block != null){
                var result = manager.executeBlock(inputItemVector1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector1 = result.value;
            }

            var vector2 = new Vector2(0, 0);
            var inputItemVector2 = inputValue.getItem("vector2");
            if (inputItemVector2.block != null){
                var result = manager.executeBlock(inputItemVector2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector2 = result.value;
            }

            return manager.returnValue(true, Vector2.distance(vector1, vector2));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_DIVIDE) {
            var inputValue = block.getInput("default");

            var vector = new Vector2(0, 0);
            var inputItemVector = inputValue.getItem("vector");
            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            var divider = NaN;

            var inputItemDivider = inputValue.getItem("divider");
            if (inputItemDivider.block != null){
                var result = manager.executeBlock(inputItemDivider.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    divider = result.value;
            }

            if (!isNaN(divider))
                return manager.returnValue(true, Vector2.divide(vector, divider));
            else
                throw new Error("Divider value is not a number! Error on [" + block.type + "]");
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_DOT_PRODUCT) {
            var inputValue = block.getInput("default");

            var vector1 = new Vector2(0, 0);
            var inputItemVector1 = inputValue.getItem("vector1");
            if (inputItemVector1.block != null){
                var result = manager.executeBlock(inputItemVector1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector1 = result.value;
            }

            var vector2 = new Vector2(0, 0);
            var inputItemVector2 = inputValue.getItem("vector2");
            if (inputItemVector2.block != null){
                var result = manager.executeBlock(inputItemVector2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector2 = result.value;
            }

            return manager.returnValue(true, Vector2.dot(vector1, vector2));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_EQUALITY) {
            var inputValue = block.getInput("default");

            var vector1 = new Vector2(0, 0);
            var inputItemVector1 = inputValue.getItem("vector1");
            if (inputItemVector1.block != null) {
                var result = manager.executeBlock(inputItemVector1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector1 = result.value;
            }

            var vector2 = new Vector2(0, 0);
            var inputItemVector2 = inputValue.getItem("vector2");
            if (inputItemVector2.block != null) {
                var result = manager.executeBlock(inputItemVector2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector2 = result.value;
            }

            return manager.returnValue(true, Vector2.isEqual(vector1, vector2));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_INVERSE) {
            var inputValue = block.getInput("default");

            var vector = new Vector2(0, 0);
            var inputItemVector = inputValue.getItem("vector");
            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            return manager.returnValue(true, Vector2.inverse(vector));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_IS_ZERO_VECTOR) {
            var inputValue = block.getInput("default");

            var vector = new Vector2(0, 0);
            var inputItemVector = inputValue.getItem("vector");
            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            return manager.returnValue(true, Vector2.isZeroVector(vector));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_MAGNITUDE) {
            var inputValue = block.getInput("default");

            var inputItemVector = inputValue.getItem("vector");
            var vector = new Vector2(0, 0);

            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            return manager.returnValue(true, Vector2.magnitude(vector));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_MULTIPLY) {
            var inputValue = block.getInput("default");

            var inputItemVector = inputValue.getItem("vector");
            var vector = new Vector2(0, 0);

            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            var inputItemScaler = inputValue.getItem("scaler");
            var scaler = 1;

            if (inputItemScaler.block != null){
                var result = manager.executeBlock(inputItemScaler.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    scaler = result.value;
            }

            return manager.returnValue(true, Vector2.multiply(vector, scaler));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_NORMALIZE) {
            var inputValue = block.getInput("default");

            var inputItemVector = inputValue.getItem("vector1");
            var vector = new Vector2(0, 0);

            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            return manager.returnValue(true, Vector2.normalize(vector));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_ROTATE_DEGREE) {
            var inputValue = block.getInput("default");

            var vector = new Vector2(0, 0);
            var inputItemVector = inputValue.getItem("vector");
            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            var angle = NaN;

            var inputItemDegree = inputValue.getItem("angle");
            if (inputItemDegree.block != null){
                var result = manager.executeBlock(inputItemDegree.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    angle = result.value;
            }

            if (!isNaN(angle))
                return manager.returnValue(true, Vector2.rotateDegree(vector, angle));
            else
                throw new Error("Angle value is not a number! Error on [" + block.type + "]");
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_SET_LENGTH) {
            var inputValue = block.getInput("default");

            var vector = new Vector2(0, 0);
            var inputItemVector = inputValue.getItem("vector");
            if (inputItemVector.block != null){
                var result = manager.executeBlock(inputItemVector.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector = result.value;
            }

            var length = NaN;

            var inputItemLength = inputValue.getItem("length");
            if (inputItemLength.block != null){
                var result = manager.executeBlock(inputItemLength.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    length = result.value;
            }

            if (!isNaN(length))
                return manager.returnValue(true, Vector2.setLength(vector, length));
            else
                throw new Error("Length value is not a number! Error on [" + block.type + "]");
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_SORT_POINTS_BY_ANGLE) {
            var inputValue = block.getInput("default");

            var points = null;

            var inputItemPoints = inputValue.getItem("points");
            if (inputItemPoints.block != null){
                var result = manager.executeBlock(inputItemPoints.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    points = result.value;
            }

            if (points != null)
                return manager.returnValue(true, Vector2.sortPointsByAngle(points));
        }
        else if (block.type == BlockType.TRIGONOMETRY_VECTOR2D_SUBTRACT) {
            var inputValue = block.getInput("default");

            var vector1 = new Vector2(0, 0);
            var inputItemVector1 = inputValue.getItem("vector1");
            if (inputItemVector1.block != null){
                var result = manager.executeBlock(inputItemVector1.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector1 = result.value;
            }

            var vector2 = new Vector2(0, 0);
            var inputItemVector2 = inputValue.getItem("vector2");
            if (inputItemVector2.block != null){
                var result= manager.executeBlock(inputItemVector2.block, eventVariables, scopeVariables, false, flowState);
                if (result != null && result.hasReturnValue)
                    vector2 = result.value;
            }

            return manager.returnValue(true, Vector2.subtract(vector1, vector2));
        }

        return manager.returnValue(false);
    };

    // consctructor
    this.blockTypes = new Array();

    this.blockTypes.push(BlockType.TRIGONOMETRY_DEGREE_TO_RADIAN);
    this.blockTypes.push(BlockType.TRIGONOMETRY_RADIAN_TO_DEGREE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_CREATE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_ADD);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_SUBTRACT);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_ANGLE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_AREA_OF_POINTS);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_CENTER_OF_POINTS);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_CROSS_PRODUCT);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_DISTANCE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_DIVIDE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_DOT_PRODUCT);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_EQUALITY);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_INVERSE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_IS_ZERO_VECTOR);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_MAGNITUDE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_MULTIPLY);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_NORMALIZE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_ROTATE_DEGREE);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_SET_LENGTH);
    this.blockTypes.push(BlockType.TRIGONOMETRY_VECTOR2D_SORT_POINTS_BY_ANGLE);

    this.hasBlockType = function (blockType) {
        for (var i = 0; i < this.blockTypes.length; i++)
            if (this.blockTypes[i] == blockType)
                return true;

        return false;
    }
}
