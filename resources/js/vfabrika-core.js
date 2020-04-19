function VFabrikaPlayer(playerData) {
    var base = this;

    var timerId = 0;
    var designObjectIds = new Array();

    this.isPlaying = false;
    this.frameIndex = -1;
    this.currentFrameIndex = -1;

    this.timelineStoppedByEvent = false;

    var layerLastKeyframeIds = new Array();
    var designObjectsInCurrentFrameIndex = new Array();

    // designObjectControllers
    var designObjectControllers = new Array();

	designObjectControllers.push(new AnimationPopupDesignObjectController(this, playerData));
	designObjectControllers.push(new PrimitiveDesignObjectsController(this, playerData));
	designObjectControllers.push(new SmartDesignObjectsController(this, playerData));
	designObjectControllers.push(new ImageDesignObjectController(this, playerData));
	designObjectControllers.push(new SoundDesignObjectController(this, playerData));
	designObjectControllers.push(new VideoDesignObjectController(this, playerData));
	designObjectControllers.push(new CanvasDesignObjectController(this, playerData));
	designObjectControllers.push(new ContentDesignObjectController(this, playerData));
	designObjectControllers.push(new HighlightDesignObjectController(this, playerData));
	designObjectControllers.push(new ImageButtonDesignObjectController(this, playerData));
	designObjectControllers.push(new InputButtonDesignObjectController(this, playerData));
	designObjectControllers.push(new InputRadioButtonDesignObjectController(this, playerData));
	designObjectControllers.push(new InputCheckBoxDesignObjectController(this, playerData));
	designObjectControllers.push(new InputDropDownListDesignObjectController(this, playerData));
	designObjectControllers.push(new InputTextBoxDesignObjectController(this, playerData));
	designObjectControllers.push(new SliderDesignObjectController(this, playerData));
	designObjectControllers.push(new TableDesignObjectController(this, playerData));
	designObjectControllers.push(new TextDesignObjectController(this, playerData));
	designObjectControllers.push(new TimerDesignObjectController(this, playerData));
	designObjectControllers.push(new DelayDesignObjectController(this, playerData));
	designObjectControllers.push(new TriggerDesignObjectController(this, playerData));


    Sbt.Droparea.MultipleInstance = true;

    this.isDesignObjectOnStage = function (designObject) {
        for (var i = 0; i < designObjectIds.length; i++)
            if (designObject.uniqueId == designObjectIds[i])
                return true;

        return false;
    };

    var getKeyframeForLayerByFrameIndex = function (layer, frameIndex) {
        for (var j = 0; j < layer.keyframes.length; j++) {
            var keyframe = layer.keyframes[j];

            if ((keyframe.frameIndex <= frameIndex) && (keyframe.frameIndex + keyframe.frameCount > frameIndex))
                return keyframe;
        }

        return null;
    };

    this.getNextKeyframeForLayerByKeyframe = function (layer, keyframe) {
        for (var j = 0; j < layer.keyframes.length; j++) {
            var keyframe_ = layer.keyframes[j];

            if (keyframe_ == keyframe) {
                if (j < layer.keyframes.length - 1)
                    return layer.keyframes[j + 1];
                else
                    return null;
            }
        }

        return null;
    };

    this.getDesignObjectForKeyframeById = function (parent, uniqueId) {
        if (parent.designObjects != undefined) {
            for (var i = 0; i < parent.designObjects.length; i++) {
                var designObject = parent.designObjects[i];

                if (designObject.uniqueId == uniqueId)
                    return designObject;

                if (designObject.designObjects != undefined) {
                    var result = base.getDesignObjectForKeyframeById(designObject, uniqueId);
                    if (result != null)
                        return result;
                }
            }
        }

        return null;
    };

    var getNextKeyframeDesignObjectForLayerByKeyframe = function (layer, keyframe, uniqueId) {
        var nextKeyframe = base.getNextKeyframeForLayerByKeyframe(layer, keyframe);
        if (nextKeyframe != null) {
            return getNextKeyframeDesignObjectForLayerByKeyframe(nextKeyframe, uniqueId);
        }
        else
            return null;
    };

    var getDesignObjectForFrameIndexByUniqueId = function (frameIndex, uniqueId) {
        for (var i = 0; i < playerData.layers.length; i++) {
            var keyframe = getKeyframeForLayerByFrameIndex(playerData.layers[i], frameIndex);
            if (keyframe != null) {
                for (var k = 0; k < keyframe.designObjects.length; k++) {
                    var designObject = keyframe.designObjects[k];

                    if (designObject.uniqueId == uniqueId)
                        return designObject;

                    if (designObject.type == "content") {
                        if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                            for (var h = 0; h < designObject.designObjects.length; h++) {
                                var subDesignObject = designObject.designObjects[h];
                                if (subDesignObject.uniqueId == uniqueId)
                                    return subDesignObject;
                            }
                        }
                    }
                }
            }
        }

        return null;
    };

    var getDesignObjectsForFrameIndex = function (frameIndex) {

        for (var i = 0; i < playerData.layers.length; i++) {
            var keyframe = getKeyframeForLayerByFrameIndex(playerData.layers[i], frameIndex);
            if (keyframe != null) {
                for (var k = 0; k < keyframe.designObjects.length; k++) {
                    var designObject = keyframe.designObjects[k];
                    designObjectsInCurrentFrameIndex.push(designObject);
                }
            }
        }

        return null;
    };

    var getLayerForFrameIndexByDesignObjectUniqueId = function (frameIndex, uniqueId) {
        for (var i = 0; i < playerData.layers.length; i++) {
            var layer = playerData.layers[i];
            var keyframe = getKeyframeForLayerByFrameIndex(layer, frameIndex);
            if (keyframe != null) {
                for (var k = 0; k < keyframe.designObjects.length; k++) {
                    var designObject = keyframe.designObjects[k];

                    if (designObject.uniqueId == uniqueId)
                        return layer;

                    if (designObject.type == "content") {
                        if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                            for (var l = 0; l < designObject.designObjects.length; l++) {
                                var subDesignObject = designObject.designObjects[l];

                                if (subDesignObject.uniqueId == uniqueId)
                                    return layer;
                            }
                        }
                    }
                }
            }
        }

        return null;
    };

    var getKeyframeForFrameIndexByDesignObjectUniqueId = function (frameIndex, uniqueId) {
        for (var i = 0; i < playerData.layers.length; i++) {
            var layer = playerData.layers[i];
            var keyframe = getKeyframeForLayerByFrameIndex(layer, frameIndex);
            if (keyframe != null) {
                for (var k = 0; k < keyframe.designObjects.length; k++) {
                    var designObject = keyframe.designObjects[k];

                    if (designObject.uniqueId == uniqueId)
                        return keyframe;

                    if (designObject.type == "content") {
                        if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                            for (var l = 0; l < designObject.designObjects.length; l++) {
                                var subDesignObject = designObject.designObjects[l];

                                if (subDesignObject.uniqueId == uniqueId)
                                    return keyframe;
                            }
                        }
                    }
                }
            }
        }

        return null;
    };

    this.getDesignObjectForTimelineByDesignObjectUniqueId = function (uniqueId) {
        for (var i = 0; i < playerData.layers.length; i++) {
            var layer = playerData.layers[i];

            for (var j = 0; j < layer.keyframes.length; j++) {
                var keyframe = layer.keyframes[j];

                for (var k = 0; k < keyframe.designObjects.length; k++) {
                    var designObject = keyframe.designObjects[k];

                    if (designObject.uniqueId == uniqueId)
                        return designObject;

                    if (designObject.type == "content") {
                        if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                            for (var l = 0; l < designObject.designObjects.length; l++) {
                                var subDesignObject = designObject.designObjects[l];

                                if (subDesignObject.uniqueId == uniqueId)
                                    return subDesignObject;
                            }
                        }
                    }
                }
            }
        }

        return null;
    };

    this.initialize = function () {
        this.frameIndex = 0;

        var designObjectUniqueIds = new Array();
        var isFirstLayer = true;

        var layerIdObjects = new Array();

        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            // create layer
            var layer = playerData.layers[playerData.layers.length - layerIndex - 1];
            var layerId = "layer_" + layer.underscoredName;

            // generate layer id
            var layerIdExists = false;

            for (var i = 0; i < layerIdObjects.length; i++) {
                var layerIdObject = layerIdObjects[i];
                if (layerIdObject.id == layerId) {
                    layerIdObject.count++;

                    layerId += layerIdObject.count.toString();

                    // also add the new object into the list
                    var layerIdObject = { id: layerId, count: 1 };
                    layerIdObjects.push(layerIdObject);

                    layerIdExists = true;
                    break;
                }
            }

            if (!layerIdExists) {
                var layerIdObject = { id: layerId, count: 1 };
                layerIdObjects.push(layerIdObject);
            }

            // create layer div
            $("#vfabrika-container").append("<div id='" + layerId + "'></div>");

            var $layerElement = $("#" + layerId);
            $layerElement.attr("v_type", "layer");

            $layerElement.addClass("vfabrika-layer");
            if (isFirstLayer) {
                isFirstLayer = false;
                $layerElement.css("width", playerData.stageWidth);
                $layerElement.css("height", playerData.stageHeight);
            }

            // for each frame block in layer create design objects
            for (var j = 0; j < layer.keyframes.length; j++) {
                var keyframe = layer.keyframes[j];

                for (var k = 0; k < keyframe.designObjects.length; k++) {
                    var designObject = keyframe.designObjects[k];

                    this.initializeDesignObject(designObjectUniqueIds, $layerElement, false, layer, keyframe, designObject);
                }
            }
        }

        // create userInteractionDisabler element
        var $userInteractionDisabler = $("<div id='div_userInteractionDisabler'></div>");
        $("#vfabrika-container").append($userInteractionDisabler);
        $userInteractionDisabler.css("z-index", 999);
        $userInteractionDisabler.css("display", "none");
        $userInteractionDisabler.css("width", playerData.stageWidth + "px");
        $userInteractionDisabler.css("height", playerData.stageHeight + "px");
        $userInteractionDisabler.css("background-color", "#ffffff");
        $userInteractionDisabler.css("opacity", 0);

        // initialize blocks engine
        var blocks = new VFabrikaBlocks(base, playerData);
        blocks.initialize();

        // initialize layerLastKeyframeIds array
        for (var i = 0; i < playerData.layers.length; i++)
            layerLastKeyframeIds.push(-1);

        this.consolidateDesignObjects();

        // trigger initialize event
        $(this).trigger("onInitialized");

        // invoke event for first frame
        $(base).trigger("frameChange", [base, this.frameIndex]);

        $("#vfabrika-container").css("display", "block");

        if (playerData.isAutoPlay && !base.timelineStoppedByEvent)
            this.play();
    };

    this.enableUserInteraction = function () {
        var $userInteractionDisabler = $("#div_userInteractionDisabler");
        $userInteractionDisabler.css("display", "none");
    };

    this.disableUserInteraction = function () {
        var $userInteractionDisabler = $("#div_userInteractionDisabler");
        $userInteractionDisabler.css("display", "block");
    };

    this.initializeDesignObject = function (uniqueIds, $parentElement, isNested, layer, keyframe, designObject) {
        var designObjectElementId = designObject.id == '' ? designObject.uniqueId : designObject.id;

        if (uniqueIds.indexOf(designObjectElementId) == -1)
            uniqueIds.push(designObjectElementId);
        else
            return;

        var designObjectElement = null;

        var designObjectTypeExists = false;

        for (var i = 0; i < designObjectControllers.length; i++) {
            var designObjectController = designObjectControllers[i];
            if (designObjectController.hasDesignObjectType(designObject.type)) {
                designObjectTypeExists = true;

                // create element first
                var $designObjectElement = designObjectController.createElement(uniqueIds, $parentElement, isNested, layer, keyframe, designObject);
                if ($designObjectElement != null) {
                    $designObjectElement.data("controllers.designObject", designObjectController);
                    // add newly created element to container
                    $parentElement.append($designObjectElement);

                    var designObjectElement = $designObjectElement[0];

                    if (!designObject.enabled)
                        $designObjectElement.attr("disabled", "disabled");

                    $designObjectElement.prop("uniqueId", designObjectElementId);

                    // evaluate attributes
                    if (designObject.attributes != null) {
                        for (var i_ = 0; i_ < designObject.attributes.length; i_++) {
                            var attribute = designObject.attributes[i_];
                            $designObjectElement.attr(attribute.name, attribute.value);
                        }
                    }

                    DesignObjectHelper.applyCssClasses($designObjectElement, designObject, layer, keyframe);
                    DesignObjectHelper.applyUserCssClasses($designObjectElement, designObject);

                    if (designObjectController["frameUpdate"] != undefined)
                        designObjectController.frameUpdate($designObjectElement, designObject);

                    // set extra data to design object selector
                    $designObjectElement.data("tag", designObject.tag);
                    $designObjectElement.data("designObject", designObject);

                    designObject.parentElementId = isNested ? $parentElement.attr("id") : "vfabrika-container";
                    designObject.isNested = isNested;

                    // set extra data to design object data
                    designObject.jqueryObject = $designObjectElement;
                    designObject.element = $designObjectElement[0];

                    // useHandCursor
                    if (designObject.useHandCursor == true)
                        $designObjectElement.css("cursor", "pointer");

                    // dragging support
                    if (designObject.isDraggable)
                        this.enableDesignObjectAsDraggable(designObjectElementId);

                    // dropping support
                    if (designObject.isDroppable)
                        this.enableDesignObjectAsDroppable(designObjectElementId);

                    // custom initialization for design object
                    if (designObjectController.initializeElement != undefined)
                        designObjectController.initializeElement(uniqueIds, $designObjectElement, isNested, layer, keyframe, designObject);

                    // hide design object initially
                    $designObjectElement.css("display", "none");
                }
            }
        }

        if (!designObjectTypeExists)
            throw new Error("DesignObjectType [" + designObject.type + "] not found in designObjectTypes!");

        $(base).trigger("frameObjectInitialize", [base, designObject]);
    };

    this.createDragMembersForDesignObject = function (designObjectElementId) {
        var $designObjectElement = $("#" + designObjectElementId);
        var designObject = $designObjectElement.data("designObject");

        // dragObject
        var dragObject = $designObjectElement.data("controllers.dragObject");
        if (dragObject == null) {
            var dragObject = new Sbt.DragObject(designObjectElementId, { revert: designObject.revertDragging, container: '#' + designObject.parentElementId, handle: designObjectElementId });
            dragObject.eventBindingBehavior = Sbt.DragObject.EVENT_BINDING_BEHAVIOR.MODERATE; // << this is a patch for mouseDown issue on restart
            $designObjectElement.data("controllers.dragObject", dragObject);
            dragObject.enable(false);
        }

        // dragHandler
        var dragHandler = $designObjectElement.data("controllers.dragHandler");
        if (dragHandler == null) {
            var dragHandler = new VFabrikaPlayerDragHandler();

            dragObject.onDragStart = function (dragObject, event) {
                dragHandler.doDragBegin(event, dragObject);
            }

            dragObject.onMove = function (dragObject, event) {
                dragHandler.doDragMove(event, dragObject);
            }

            dragObject.onDragStop = function (dragObject, event) {
                dragHandler.doDragEnding(event, dragObject);
            }

            dragObject.onEnd = function (dragObject, event) {
                dragHandler.doDragEnd(event, dragObject);
            }

            $designObjectElement.data("controllers.dragHandler", dragHandler);
        }
    }

    this.enableDesignObjectAsDraggable = function (designObjectElementId) {
        this.createDragMembersForDesignObject(designObjectElementId);

        var $designObjectElement = $("#" + designObjectElementId);
        var dragObject = $designObjectElement.data("controllers.dragObject");
        dragObject.enable(true);
    };

    this.disableDesignObjectAsDraggable = function (designObjectElementId) {
        var $designObjectElement = $("#" + designObjectElementId);
        var dragObject = $designObjectElement.data("controllers.dragObject");
        if (dragObject != undefined)
            dragObject.enable(false);
    };

    this.enableDesignObjectAsDroppable = function (designObjectElementId) {
        var $designObjectElement = $("#" + designObjectElementId);
        var designObject = $designObjectElement.data("designObject");

        var dropHandler = this.createDropHandlerForDesignObject(designObjectElementId);

        if (designObject.highlightBehavior) {
            Sbt.Droparea.add(designObjectElementId,
                {
                    onDrop: function (event, dragObject, dropArea) {
                        dropHandler.doDrop(event, dragObject, dropArea);
                    },
                    highLight: { width: parseInt(designObject.highlightWidth), height: parseInt(designObject.highlightHeight) }
                });
        } else {
            Sbt.Droparea.add(designObjectElementId,
                {
                    onDrop: function (event, dragObject, dropArea) {
                        dropHandler.doDrop(event, dragObject, dropArea);
                    }
                });
        }
    };

    this.createDropHandlerForDesignObject = function (designObjectElementId) {
        var $designObjectElement = $("#" + designObjectElementId);
        var designObject = $designObjectElement.data("designObject");

        var dropHandler = $designObjectElement.data("controllers.dropHandler");

        if (dropHandler == undefined) {
            var dropHandler = new VFabrikaPlayerDropHandler();

            dropHandler.designObject = designObject;
            dropHandler.designObjectId = designObjectElementId;
            dropHandler.designObjectSelector = $designObjectElement;

            $designObjectElement.data("controllers.dropHandler", dropHandler);
        }

        return dropHandler;
    };

    this.disableDesignObjectAsDroppable = function (designObjectElementId) {
        Sbt.DropArea.remove(designObjectElementId);
    };

    this.consolidateDesignObjects = function (frameIndex, suspendEvents) {
        inDesignObjectIds = new Array();
        outDesignObjectIds = new Array();

        // check for inDesignObjects
        for (var i = 0; i < playerData.layers.length; i++) {
            var layer = playerData.layers[playerData.layers.length - i - 1];

            var keyframe = getKeyframeForLayerByFrameIndex(layer, base.frameIndex);

            if (keyframe != null) {
                for (var j = 0; j < keyframe.designObjects.length; j++) {
                    var designObject = keyframe.designObjects[j];

                    if (designObjectIds.indexOf(designObject.uniqueId) == -1)
                        inDesignObjectIds.push(designObject.uniqueId);

                    if (designObject.type == "content") {
                        if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                            for (var h = 0; h < designObject.designObjects.length; h++) {
                                var subDesignObject = designObject.designObjects[h];
                                if (designObjectIds.indexOf(subDesignObject.uniqueId) == -1)
                                    inDesignObjectIds.push(subDesignObject.uniqueId);
                            }
                        }
                    }
                }
            }
        }

        // check for outDesignObjects
        for (var i = 0; i < designObjectIds.length; i++) {
            var isFound = false;

            for (var j = 0; j < playerData.layers.length; j++) {
                var layer = playerData.layers[playerData.layers.length - j - 1];

                var keyframe = getKeyframeForLayerByFrameIndex(layer, base.frameIndex);

                if (keyframe != null) {
                    for (var k = 0; k < keyframe.designObjects.length; k++) {
                        var designObject_ = keyframe.designObjects[k];

                        if (designObject_.uniqueId == designObjectIds[i]) {
                            isFound = true;
                            break;
                        }
                    }

                    if (isFound)
                        break;
                }
            }

            // check for content design objects
            for (var j = 0; j < playerData.layers.length; j++) {
                var layer = playerData.layers[playerData.layers.length - j - 1];

                var keyframe = getKeyframeForLayerByFrameIndex(layer, base.frameIndex);

                if (keyframe != null) {
                    for (var k = 0; k < keyframe.designObjects.length; k++) {
                        var designObject_ = keyframe.designObjects[k];

                        if (designObject_.type == "content") {
                            if (designObject_.designObjects != null && designObject_.designObjects.length > 0) {
                                for (var l = 0; l < designObject_.designObjects.length; l++) {
                                    var subDesignObject = designObject_.designObjects[l];

                                    if (subDesignObject.uniqueId == designObjectIds[i]) {
                                        isFound = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (!isFound)
                outDesignObjectIds.push(designObjectIds[i]);
        }

        // show neccessary elements on stage
        for (var i = 0; i < inDesignObjectIds.length; i++) {
            var designObjectUniqueId = inDesignObjectIds[i];
            var designObject = getDesignObjectForFrameIndexByUniqueId(base.frameIndex, designObjectUniqueId);
            var designObjectElementId = designObject.id != "" ? designObject.id : designObject.uniqueId;
            var $designObjectElement = $("#" + designObjectElementId);

            designObjectIds.push(designObjectUniqueId);

            if ((designObject.visible && designObject.type != "trigger") || (designObject.isVisual == undefined || !designObject.isVisual)) {
                if (designObject.type != "animationPopup")
                    $designObjectElement.css("display", "block");

                var designObjectController = base.getDesignObjectController(designObject.type);
                if (designObjectController != null) {
                    if (designObjectController.frameUpdate != undefined)
                        designObjectController.frameUpdate($designObjectElement, designObject);

                    if (designObjectController.showElement != undefined)
                        designObjectController.showElement($designObjectElement, designObject);
                } else
                    console.error("designobject controller not found!");
            }

            if (!suspendEvents)
                $(base).trigger("frameObject", [base, designObject]);
        }

        // hide other ones
        for (var i = 0; i < outDesignObjectIds.length; i++) {
            var designObjectUniqueId = outDesignObjectIds[i];
            var designObject = base.getDesignObjectForTimelineByDesignObjectUniqueId(designObjectUniqueId);
            var designObjectElementId = designObject.id != "" ? designObject.id : designObject.uniqueId;
            var $designObjectElement = $("#" + designObjectElementId);

            $designObjectElement.css("display", "none");

            for (var k = 0; k < designObjectControllers.length; k++) {
                var designObjectController = designObjectControllers[k];

                if (designObjectController.hideElement != undefined)
                    designObjectController.hideElement($designObjectElement, designObject);
            }

            var index = designObjectIds.indexOf(designObjectUniqueId);
            if (index != -1)
                designObjectIds.splice(index, 1);
        }

        // for existing objects
        for (var i = 0; i < playerData.layers.length; i++) {
            var layer = playerData.layers[i];
            var keyframe = getKeyframeForLayerByFrameIndex(layer, base.frameIndex);

            if (keyframe != null) {
                if (keyframe.motionTween) {
                    for (var j = 0; j < keyframe.designObjects.length; j++) {
                        var designObject = keyframe.designObjects[j];
                        var designObjectElementId = designObject.id == "" ? designObject.uniqueId : designObject.id;
                        var $designObjectElement = $("#" + designObjectElementId);
                        var designObjectController = $designObjectElement.data("controllers.designObject");

                        var tweenX = designObject.x;
                        var tweenY = designObject.y;
                        var tweenPivotX = designObject.pivotX;
                        var tweenPivotY = designObject.pivotY;
                        var tweenWidth = designObject.width;
                        var tweenHeight = designObject.height;
                        var tweenAlpha = designObject.alpha;
                        var tweenRotation = designObject.rotation;

                        var nextKeyframe = base.getNextKeyframeForLayerByKeyframe(layer, keyframe);
                        if (nextKeyframe != null) {
                            var nextKeyframeDesignObject = base.getDesignObjectForKeyframeById(nextKeyframe, designObject.uniqueId);
                            if (nextKeyframeDesignObject != null) {
                                var currentTime = Math.round(base.frameIndex - keyframe.frameIndex);
                                var totalTime = keyframe.frameCount;
                                if (designObjectController != null && designObjectController["frameTween"] != undefined)
                                    designObjectController.frameTween(layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject);
                            }
                        }

                        if (designObjectController != null && designObjectController["frameChanged"] != undefined)
                            designObjectController.frameChanged($designObjectElement, designObject, keyframe, nextKeyframe)
                    }
                } else if (layerLastKeyframeIds[i] != keyframe.uniqueId) {
                    layerLastKeyframeIds[i] = keyframe.uniqueId;

                    for (var j = 0; j < keyframe.designObjects.length; j++) {
                        var designObject = keyframe.designObjects[j];

                        var designObjectElementId = designObject.id == "" ? designObject.uniqueId : designObject.id;
                        var $designObjectElement = $("#" + designObjectElementId);

                        var designObjectController = $designObjectElement.data("controllers.designObject");

                        if (designObjectController != null) {
                            if (designObjectController["frameUpdate"] != undefined)
                                designObjectController.frameUpdate($designObjectElement, designObject);

                            if (designObjectController["frameChanged"] != undefined)
                                designObjectController.frameChanged($designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe)
                        }
                    }
                }
            }
        }

        // invoke events for triggers
        if (!suspendEvents) {
            for (var i = 0; i < inDesignObjectIds.length; i++) {
                var designObjectUniqueId = inDesignObjectIds[i];
                var designObject = getDesignObjectForFrameIndexByUniqueId(base.frameIndex, designObjectUniqueId);
                var designObjectElementId = designObject.id != "" ? designObject.id : designObject.uniqueId;
                var $designObjectElement = $("#" + designObjectElementId);

                if (designObject != null) {
                    if (designObject.type == "trigger") {
                        $designObjectElement.trigger("invoke");
                        $(base).trigger("frameTrigger", [base, designObject]);
                    }
                }
                else
                    console.info("Design object is null for trigger loop");
            }
        }
    };

    var onEnterFrame = function () {
        // invalidate frameIndex
        if (base.isPlaying && playerData.framesPerSecond > 0) {
            base.frameIndex++;
            //console.info("frameIndex > " + base.frameIndex);

            if (base.frameIndex > playerData.frameCount - 1) {
                if (playerData.isLooping == true)
                    base.frameIndex = 0;
                else {
                    base.frameIndex = playerData.frameCount - 1;
                    base.stop();
                }
            }

            if (base.frameIndex != base.currentFrameIndex) {
                $(base).trigger("frameChange", [base, base.frameIndex]);
                base.currentFrameIndex = base.frameIndex;
            }

            base.consolidateDesignObjects(base.frameIndex, false);
        }
    };

    this.gotoAndPlay = function (frameIndex) {
        base.stop();

        if (playerData.length <= frameIndex)
            console.error("VFabrikaPlayer Exception > frameIndex value exceeds VFabrika timeline length.");

        this.frameIndex = frameIndex;
        base.play();
    };

    this.setFramePerSecond = function (framesPerSecond) {
        playerData.framesPerSecond = framesPerSecond;

        if (this.isPlaying) {
            if (base.timerId != 0)
                window.clearInterval(base.timerId);

            base.timerId = window.setInterval(onEnterFrame, 1000 / playerData.framesPerSecond);
        }
    };

    this.play = function () {
        this.isPlaying = true;

        this.consolidateDesignObjects(this.frameIndex, false);

        if (base.timerId != 0)
            window.clearInterval(base.timerId);

        $(base).trigger("frameChange", [base, this.frameIndex]);

        $(base).trigger("stateChange", [base, this.isPlaying]);

        if (this.isPlaying)
            base.timerId = window.setInterval(onEnterFrame, 1000 / playerData.framesPerSecond);
    };

    this.gotoAndStop = function (frameIndex) {
        if (this.isPlaying)
            this.stop();

        this.frameIndex = frameIndex;

        this.consolidateDesignObjects(this.frameIndex, false);

        $(base).trigger("frameChange", [base, this.frameIndex]);
    };

    this.stop = function () {
        this.isPlaying = false;

        if (base.timerId != 0) {
            window.clearInterval(base.timerId);
            base.timerId = 0;
        }

        $(base).trigger("stateChange", [base, this.isPlaying]);

        //this.consolidateDesignObjects(this.frameIndex, true);
    };

    this.reset = function () {
        for (var i = 0; i < designObjectIds.length; i++) {
            var uniqueId = designObjectIds[i];

            var designObjectDiv = $("#vfabrika-container").find("[uniqueId]").each(function (index) {
                if ($(this).prop("uniqueId") == uniqueId) {
                    $(this).remove();
                    delete $(this);
                }
            });

            if (designObjectIds.indexOf(uniqueId) != -1)
                designObjectIds.splice(designObjectIds.indexOf(uniqueId), 1);
        }

        //this.gotoAndStop(0);
    };

    this.resetStage = function () {
        getDesignObjectsForFrameIndex(base.frameIndex);

        for (var i = 0; i < designObjectsInCurrentFrameIndex.length; i++) {
            var designObjectUniqueId = designObjectsInCurrentFrameIndex[i].uniqueId;
            var designObject = getDesignObjectForFrameIndexByUniqueId(base.frameIndex, designObjectUniqueId);
            var designObjectElementId = designObject.id != "" ? designObject.id : designObject.uniqueId;
            var $designObjectElement = $("#" + designObjectElementId);

            $designObjectElement.css("left", designObject.x);
            $designObjectElement.css("top", designObject.y);

            if (!designObject.isSprite) {
                $designObjectElement.css("width", designObject.width);
                $designObjectElement.css("height", designObject.height);
            } else {
                $designObjectElement.css("width", designObject.spriteWidth);
                $designObjectElement.css("height", designObject.spriteHeight);
            }

            if (designObject.visible)
                $designObjectElement.css("display", "block");
            else
                $designObjectElement.css("display", "none");

            if ($designObjectElement.css("opacity") != designObject.alpha / 100.0)
                $designObjectElement.css("opacity", designObject.alpha / 100.0);
        }
    };

    this.callUserFunction = function (functionName, parameters) {
        return $(base).triggerHandler("userFunction", [functionName, parameters]);
    };

    this.invokeUserFunction = function (functionName, parameters) {
        return $(base).triggerHandler("userInvokeFunction", [functionName, parameters]);
    };

    this.getDesignObjectController = function (designObjectType) {
        for (var i = 0; i < designObjectControllers.length; i++) {
            var designObjectController = designObjectControllers[i];
            if (designObjectController.hasDesignObjectType(designObjectType))
                return designObjectController;
        }

        return null;
    };
}
function VFabrikaBlocks(player, playerData) {
    this.variables = new Array();
    this.omitConsoleMessages = playerData.omitConsoleMessages;

    this.createVariables = function () {
        var variables = [];

        variables.add = function (name, value) {
            this.push({ name: name, value: value });
        }

        variables.getVariable = function (name) {
            for (var i = 0; i < this.length; i++) {
                var variable = variables[i];
                if (variable.name == name)
                    return variable;
            }
        }

        variables.getValue = function (name) {
            for (var i = 0; i < this.length; i++) {
                var variable = variables[i];
                if (variable.name == name)
                    return variable.value;
            }
            
            throw new Error("CreateVariables.getValue: variable not found! [" + name + "]");
        }

        variables.remove = function (name) {
            for (var i = 0; i < this.length; i++) {
                var variable = variables[i];
                if (variable.name == name) {
                    this.splice(index, 1);
                    break;
                }
            }
            
            throw new Error("CreateVariables.remove: variable not found! [" + name + "]");
        }

        return variables;
    }

    this.cloneScopeVariables = function(scopeVariables) {
        var newScopeVariables = this.createVariables();
        
        if (scopeVariables != null) {
            for (var i = 0; i < scopeVariables.length; i++) {
                var scopeVariable = scopeVariables[i];
                newScopeVariables.push(scopeVariable);
            }
        }

        return newScopeVariables;
    }

    this.createVariable = function (name, value) {
        return { name: name, value: value };
    }

    this.returnValue = function (aHasReturnValue, aValue) {
        return { hasReturnValue: aHasReturnValue, value: aValue };
    }

    ////////////////////////////////////
    // BlocksControllers registration //
    ////////////////////////////////////

    var blocksControllers = new Array();

    	blocksControllers.push(new ScormBlocksController(this, player, playerData));
	blocksControllers.push(new SebitFrameworkBlocksController(this, player, playerData));
	blocksControllers.push(new PrimitiveDesignObjectsBlocksController(this, player, playerData));
	blocksControllers.push(new SmartDesignObjectsBlocksController(this, player, playerData));
	blocksControllers.push(new BuiltinBlocksController(this, player, playerData));
	blocksControllers.push(new ImageDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new SoundDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new VideoDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new CanvasDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new ContentDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new HighlightDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new ImageButtonDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new InputButtonDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new InputRadioButtonDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new InputCheckBoxDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new InputDropDownListDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new InputTextBoxDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new JsonDataSetBlocksController(this, player, playerData));
	blocksControllers.push(new SliderDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new TableDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new TextDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new TimerDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new DelayDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new TriggerDesignObjectBlocksController(this, player, playerData));
	blocksControllers.push(new TrigonometryBlocksController(this, player, playerData));


    //////////////////////////
    // Life-cycle functions //
    //////////////////////////

    var initializeFunctions = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blocks.length; blockIndex++) {
                        var block = keyframe.blocks[blockIndex];

                        initializeFunctionsRecursively(block);
                    }
                }
            }
        }
    }

    var initializeFunctionsRecursively = function (block) {
        // set getInput function
        block.getInput = function (name) {
            for (var i = 0; i < this.inputs.length; i++) {
                var input = this.inputs[i];

                if (input.name == name)
                    return input;
            }

            return null;
        };

        // set getItem function
        for (var blockInputIndex = 0; blockInputIndex < block.inputs.length; blockInputIndex++) {
            var blockInput = block.inputs[blockInputIndex];

            blockInput.getItem = function (name) {
                for (var i = 0; i < this.items.length; i++) {
                    var item = this.items[i];

                    if (item.name == name)
                        return item;
                }

                return null;
            };

            // set block function
            if (blockInput.block != null) {
                initializeFunctionsRecursively(blockInput.block);
            }

            // set blocks functions
            if (blockInput.flowBlock != null)
                initializeFunctionsRecursively(blockInput.flowBlock);

            // set item's block function
            for (var blockInputItemIndex = 0; blockInputItemIndex < blockInput.items.length; blockInputItemIndex++) {
                var blockInputItem = blockInput.items[blockInputItemIndex];

                if (blockInputItem.type == "container" && blockInputItem.block != null)
                    initializeFunctionsRecursively(blockInputItem.block);
            }
        }

        if (block.flowBlock != null)
            initializeFunctionsRecursively(block.flowBlock);
    }

    this.initialize = function () {
        initializeFunctions();

        // preInitialize
        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            blocksController.preInitialize(this);
        }

        // initialize
        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            blocksController.initialize(this);
        }

        // postInitialize
        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            blocksController.postInitialize(this);
        }
    }

    this.setObjectProperty = function (obj, propertyName, value) {
        if (obj.value != undefined) {
            var designObjectElement = $(obj.value);

            if (propertyName.toLowerCase() == "id") {
                designObjectElement.attr("id", value);
                obj.id = value;
            } else if (propertyName.toLowerCase() == "locationx")
                designObjectElement.css("left", value + "px");
            else if (propertyName.toLowerCase() == "locationy")
                designObjectElement.css("top", value + "px");
            else if (propertyName.toLowerCase() == "width")
                designObjectElement.css("width", value + "px");
            else if (propertyName.toLowerCase() == "height")
                designObjectElement.css("height", value + "px");
            else if (propertyName.toLowerCase() == "isdroppable")
                designObject.isDroppable = value;
            else if (propertyName.toLowerCase() == "isdraggable") {
                designObject.isDraggable = value;

                var dragObject = designObjectElement.data("controllers.dragObject");
                dragObject.enable(value);
            }
            else if (propertyName.toLowerCase() == "visible") {
                designObject.isVisible = value;
                if (value)
                    designObjectElement.css("display", "block");
                else
                    designObjectElement.css("display", "none");
            } else if (propertyName.toLowerCase() == "enabled") {
                designObject.enabled = value;

                if (value)
                    designObjectElement.removeAttr("disabled");
                else
                    designObjectElement.attr("disabled", "disabled");
            } else if (propertyName.toLowerCase() == "alpha") {
                value = parseFloat(value / 100);
                designObject.alpha = value;
                designObjectElement.css("opacity", value);
            } else if (propertyName.toLowerCase() == "classname")
                designObjectElement.attr("class", value);
            else if (propertyName.toLowerCase() == "tag")
                designObject.tag = value;
            else if (propertyName.toLowerCase() == "text") {
                designObject.text = value;
                designObjectElement.html(value);
            } 
            else if (propertyName.toLowerCase() == "value") {
                if (block.type == "slider_design_object_set_property") {
                    var slider = designObjectElement.data("controllers.slider");
                    slider.value = value;
                } else
                    designObjectElement.html(value);

                designObject.value = value;
            } else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                if (!value)
                    designObjectElement.css("cursor", "default");
                else
                    designObjectElement.css("cursor", "pointer");

                designObject.useHandCursor = value;
            }
            else if (propertyName.toLowerCase().indexOf("css:") != -1) {
                var cssPropertyName = propertyName.substring(4, propertyName.length);
                designObjectElement.css(cssPropertyName, value);
            } else {
                obj[propertyName] = value;
            }
        } else
            obj[propertyName] = value;
    }

    this.getObjectProperty = function (obj, propertyName) {
        if (obj.value != undefined) {
            var designObjectElement = $(obj.value);
            var designObject = designObjectElement.data("designObject");

            if (propertyName.toLowerCase() == "id")
                return designObjectElement.attr("id");
            else if (propertyName.toLowerCase() == "locationx")
                return parseInt(designObjectElement.css("left").replace("px", ""));
            else if (propertyName.toLowerCase() == "locationy")
                return parseInt(designObjectElement.css("top").replace("px", ""));
            else if (propertyName.toLowerCase() == "width")
                return parseInt(designObjectElement.css("width").replace("px", ""));
            else if (propertyName.toLowerCase() == "height")
                return parseInt(designObjectElement.css("height").replace("px", ""));
            else if (propertyName.toLowerCase() == "isdroppable")
                return designObject.isDroppable;
            else if (propertyName.toLowerCase() == "isdraggable")
                return designObject.isDraggable;
            else if (propertyName.toLowerCase() == "visible")
                return designObject.isVisible;
            else if (propertyName.toLowerCase() == "enabled")
                return designObject.enabled;
            else if (propertyName.toLowerCase() == "alpha")
                return designObject.alpha;
            else if (propertyName.toLowerCase() == "classname")
                return designObjectElement.attr("class");
            else if (propertyName.toLowerCase() == "tag")
                return designObject.tag;
            else if (propertyName.toLowerCase() == "value") {
                if (block.type == BlockType.SLIDER_DESIGN_OBJECT_GET_PROPERTY) {
                    var slider = designObjectElement.data("controllers.slider");
                    return slider.value;
                }
                else
                    return designObject.value;
            }
            else if (propertyName.toLowerCase() == "text") {
                return designObject.text;
            }
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return designObject.useHandCursor;
            else if (propertyName.toLowerCase().indexOf("css:") != -1) {
                var cssPropertyName = propertyName.substring(4, propertyName.length);
                return designObjectElement.css(cssPropertyName);
            }
            else
                return obj[propertyName];
        }
        else
            return obj[propertyName];
    }

    var dragged = false;

    this.createFlowState = function () {
        return { modifierType: null, modifierValue: null };
    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        var isBlockTypeFound = false;

        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            if (blocksController.hasBlockType(block.type)) {
                isBlockTypeFound = true;

                var result = blocksController.executeBlock(block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    return result;

                break;
            }
        }

        if (!isBlockTypeFound)
            throw new Error("block type not found! [" + block.type + "]");

        if (flow && block.flowBlock != null && flowState.modifierType == null) {
            var result = this.executeBlock(block.flowBlock, eventVariables, scopeVariables, flow, flowState);
            if (result != null && result.hasReturnValue)
                return result;
        }
    }

    this.startsWith = function (text, keyword) {
        if (text == undefined)
            return false;

        if (keyword == undefined)
            return false;

        for (var i = 0; i < keyword.length; i++) {
            if (i > text.length - 1)
                break;
            
            if (keyword.charAt(i) != text.charAt(i))
                return false;
        }

        return true;
    }

    this.getUserClass = function (classText) {
        return DesignObjectBlocksControllerHelper.getUserClass(classText);
    }

    this.setUserClass = function (classText, value) {
        DesignObjectBlocksControllerHelper.setUserClass(classText, value);
    }
}
function VFabrikaPlayerDropHandler() {
    var base = this;

    this.doDrop = function (event, dragObject, dropHandler) {
        $(base).trigger("drop", [base, dragObject, dropHandler]);
    }

    this.doOver = function (event, dragObject, dropHandler) {
        $(base).trigger("over", [base, dragObject, dropHandler]);
    }

    this.doOut = function (event, dragObject, dropHandler) {
        $(base).trigger("out", [base, dragObject, dropHandler]);
    }
}
function VFabrikaPlayerDragHandler() {
    var base = this;

    this.doDragBegin = function (event, dragObject) {
        $(base).trigger("dragBegin", [base, dragObject]);
    }

    this.doDragMove = function (event, dragObject) {
        $(base).trigger("dragMove", [base, dragObject]);
    }

    this.doDragEnding = function (event, dragObject) {
        $(base).trigger("dragEnding", [base, dragObject]);
    }

    this.doDragEnd = function (event, dragObject) {
        $(base).trigger("dragEnd", [base, dragObject]);
    }
}
var VFabrikaHelper = {};

VFabrikaHelper.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
VFabrikaHelper.isFirefox = typeof InstallTrigger !== 'undefined';
VFabrikaHelper.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
VFabrikaHelper.isIE = /*@cc_on!@*/false || !!document.documentMode;
VFabrikaHelper.isEdge = !VFabrikaHelper.isIE && !!window.StyleMedia;
VFabrikaHelper.isChrome = !!window.chrome && !!window.chrome.webstore;
VFabrikaHelper.isBlink = (VFabrikaHelper.isChrome || VFabrikaHelper.isOpera) && !!window.CSS;

VFabrikaHelper.startsWith = function (text, prefix) {
    return text.indexOf(prefix, 0) !== -1;
};
VFabrikaHelper.endsWith = function (text, suffix) {
    return text.indexOf(suffix, text.length - suffix.length) !== -1;
};
DataSet = function () {
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

DataSet.instance = null;

DataSet.getInstance = function () {
    if (DataSet.instance == null)
        DataSet.instance = new DataSet();

    return DataSet.instance;
}

/*
(var RotaryDrawer = function(scope) {
    this.value = 5;

    function()
    {
        
    }
})(create_namespace(this, "com.sebit.vfabrika"));

sbt.video.Video
var drawer = new com.sebit.vfabrika.RotaryDrawer();
drawer.value
*/

/////////////////////////////////////////
///
/// Javascript port of classic Actionscript Vector2
/// class for generic 2d vector operations
/// Murat Dogan CORUH
/// 11.01.2013
/// 
/////////////////////////////////////////

var MathHelper = {};

MathHelper.toDegree = function (angle) {
	return angle * 180 / Math.PI;
}

MathHelper.toRadian = function (angle) {
	return angle * Math.PI / 180;
}

function Vector2(x, y) {
	this.x = x;
	this.y = y;

	this.clone = function () {
		return new Vector2(this.x, this.y);
	}
}

/**
* Adds two vectors with each other
*/
Vector2.add = function(v1, v2) {
	return new Vector2(v1.x + v2.x, v1.y + v2.y);
}
/**
* Subtracts second vector from first vector
* @summary Subtracts second vector from first vector
*/
Vector2.subtract = function(v1, v2) {
	return new Vector2(v1.x - v2.x, v1.y - v2.y);
}
/**
* Multiplies vector x,y,z components with a scaler value
* @summary Multiplies vector x,y,z components with a scaler value
*/
Vector2.multiply = function(v, scaler) {
	return new Vector2(v.x * scaler, v.y * scaler);
}
/**
* Divides vector x,y,z components with a divider value
* @summary Divides vector x,y,z components with a divider value
*/
Vector2.divide = function(v, divider) {
	return new Vector2(v.x / divider, v.y / divider);
}
/**
* Inverses vector
* @summary Inverses vector
*/
Vector2.inverse = function(v) {
	return new Vector2(-v.x, -v.y);
}
/**
* sets length of given vector and return it
* @summary sets length of given vector and return it
*/
Vector2.setLength = function(v, length) {
	var len = Math.sqrt((v.x * v.x) + (v.y * v.y));
	return new Vector2(v.x * (length / len), v.y * (length / len));
}
/**
* returns true if the vector is zero vector
* @summary returns true if the vector is zero vector
*/
Vector2.isZeroVector = function(v) {
	return ((v.x == 0) && (v.y == 0));
}
/**
* returns the length of vector
* @summary returns the length of vector
*/
Vector2.magnitude = function(v) {
	return Math.sqrt((v.x * v.x) + (v.y * v.y));
}
/**
* returns unit vector from given vector
* @summary returns unit vector from given vector
*/
Vector2.normalize = function(v) {
	var mag = Vector2.magnitude(v);
	return new Vector2(v.x / mag, v.y / mag);
}
/**
* returns dot product of two given vectors
* @summary returns dot product of two given vectors
*/
Vector2.dot = function(v1, v2) {
	return (v1.x * v2.x) + (v1.y * v2.y);
}
/**
* returns cross product of two given vectors
* @summary returns cross product of two given vectors
*/
Vector2.cross = function(v1, v2) {
	return (v1.x * v2.y) - (v2.x * v1.y);
}
/**
* returns the distance from one vector to another
* @summary returns the distance from one vector to another
*/
Vector2.distance = function(v1, v2) {
	return Math.sqrt(((v1.x - v2.x) * (v1.x - v2.x)) + ((v1.y - v2.y) * (v1.y - v2.y)));
}
/**
* rotates a vector with given radian angle
* @summary rotates a vector with given radian angle
* @explicit thanks to Sinan
*/
Vector2.rotateRadian = function(v, radian) {
	var vr = new Vector2();

	vr.x = v.x * Math.cos(radian) - v.y * Math.sin(radian);
	vr.y = v.y * Math.cos(radian) + v.x * Math.sin(radian);

	return vr;
}
/**
* rotates a vector with given degree angle
* @summary rotates a vector with given degree angle
* @explicit thanks to Sinan
*/
Vector2.rotateDegree = function(v, degree) {
	return Vector2.rotateRadian(v, MathHelper.toRadian(degree));
}


/**
* returns unsigned degree angle between 0 and +180 by given two vectors
* @summary returns unsigned degree angle between 0 and +180 by given two vectors
*/
Vector2.angleUnsigned = function(v1, v2) {
	var va = Vector2.normalize(v1);
	var vb = Vector2.normalize(v2);
	var dot = Vector2.dot(va, vb);
	var rad = Math.acos(dot);
	var deg = MathHelper.toDegree(rad);

	return deg;
}
/**
* returns signed degree angle between -180 and +180 by given two vectors
* @summary returns signed degree angle between -180 and +180 by given two vectors
*/
Vector2.angleSigned = function(v1, v2) {
	var va = Vector2.normalize(v1);
	var vb = Vector2.normalize(v2);
	var dot = Vector2.dot(va, vb);
	var cross = Vector2.cross(vb, va);
	var rad = Math.acos(dot);
	var deg = MathHelper.toDegree(rad);

	if (cross >= 0) {
		cross = 1;
	}
	if (cross < 0) {
		cross = -1;
	}

	return deg * cross;
}
/**
* returns degree angle between 0 and 360 by given two vectors
* @summary returns degree angle between 0 and 360 by given two vectors
*/
Vector2.angle360 = function(v1, v2) {
	var va = Vector2.normalize(v1);
	var vb = Vector2.normalize(v2);
	var dot = Vector2.dot(va, vb);
	var cross = Vector2.cross(vb, va);
	var rad = Math.acos(dot);
	var deg = MathHelper.toDegree(rad);

	if (cross > 0)
		return deg;
	else
		return 360 - deg;
}

/**
	* Compares two vectors for their equality?
	* @summary Compares two vectors for their equality?
	* @param	v1 "First vector to compare."
	* @param	v2 "Second vector to compare."
	* @return "True of false by comparison."
	*/
Vector2.isEqual = function isEqual(v1, v2)
{
	return (v1.x == v2.x) && (v1.y == v2.y);
}

Vector2.centerOfPoints = function(points) {
	var vr = new Vector2(0, 0);

	for (var i = 0; i < points.length; i++) {
		vr.x += points[i].x;
		vr.y += points[i].y;
	}

	vr.x = vr.x / points.length;
	vr.y = vr.y / points.length;

	return vr;
}

Vector2.sortPointsByAngle = function (points) {
    var angles = new Array();

    var center = Vector2.centerOfPoints(points);

    for (var i = 0; i < points.length; i++) {
        var vx = Vector2.normalize(new Vector2(1, 0));
        var v = Vector2.normalize(Vector2.subtract(center, points[i]));
        var deg = Vector2.angle360(vx, v);

        angles.push({ order: i, degree: deg, vector: points[i] });
    }

    // bubble sort
    //angles.sortOn("degree", Array.NUMERIC);
    for (var i = 0; i < angles.length; i++) {
        for (var j = 0; j < angles.length - 1; j++) {
            var angle1 = angles[j];
            var angle2 = angles[j + 1];

            if (angle1.degree > angle2.degree) {
                var obj = angles[j];
                angles[j] = angles[j + 1];
                angles[j + 1] = obj;
            }
        }
    }

    var result = new Array();
    for (var i = 0; i < angles.length; i++)
        result.push(angles[i].vector);

    return result;
}

Vector2.areaOfPoints = function (points) {
    var points_ = Vector2.sortPointsByAngle(points);
    points_.reverse();

    var fp = points_[0];
    var sp;
    var fs = 0;

    for (var i = 1; i < points_.length; i++) {
        sp = points_[i];
        fs += (fp.x * sp.y) - (fp.y * sp.x);
        fp = points_[i];
    }

    sp = points_[0];
    fs += (fp.x * sp.y) - (fp.y * sp.x);
    fs = fs / 2;

    return fs;
}

var Easing = {};

Easing.PI = Math.PI;
Easing.HALF_PI = Easing.PI / 2;

Easing.linear = function (value) {
    return value;
};

Easing.quadraticEaseIn = function (value) {
    return value * value;
};

Easing.quadraticEaseOut = function (value) {
    return -(value * (value - 2));
};

Easing.quadraticEaseInOut = function (value) {
    if (value < 0.5)
        return 2 * value * value;
    else
        return (-2 * value * value) + (4 * value) - 1;
};

Easing.cubicEaseIn = function (value) {
    return value * value * value;
};

Easing.cubicEaseOut = function (value) {
    var f = value - 1;
    return f * f * f + 1;
};

Easing.cubicEaseInOut = function (value) {
    if (value < 0.5) {
        return 4 * value * value * value;
    } else {
        var f = ((2 * value) - 2);
        return 0.5 * f * f * f + 1;
    }
};

Easing.quarticEaseIn = function (value) {
    return value * value * value * value;
};

Easing.quarticEaseOut = function (value) {
    var f = value - 1;
    return f * f * f * (1 - value) + 1;
};

Easing.quarticEaseInOut = function (value) {
    if (value < 0.5) {
        return 8 * value * value * value * value;
    } else {
        var f = (value - 1);
        return -8 * f * f * f * f + 1;
    }
};

Easing.quinticEaseIn = function (value) {
    return value * value * value * value * value;
};

Easing.quinticEaseOut = function (value) {
    var f = value - 1;
    return f * f * f * f + 1;
};

Easing.quinticEaseInOut = function (value) {
    if (value < 0.5) {
        return 16 * value * value * value * value * value;
    } else {
        var f = ((2 * value) - 2);
        return 0.5 * f * f * f * f * f + 1;
    }
};

Easing.sineEaseIn = function (value) {
    return Math.sin((value - 1) * Easing.HALF_PI);
};

Easing.sineEaseOut = function (value) {
    return Math.sin(value * Easing.HALF_PI);
};

Easing.sineEaseInOut = function (value) {
    return 0.5 * (1 - Math.cos(value * Easing.PI));
};

Easing.circularEaseIn = function (value) {
    return 1 - Math.sqrt(1 - (value * value));
};

Easing.circularEaseOut = function (value) {
    return Math.sqrt((2 - value) * value);
};

Easing.circularEaseInOut = function (value) {
    if (value < 0.5)
        return 0.5 * (1 - Math.sqrt(1 - 4 * (value * value)));
    else
        return 0.5 * (Math.sqrt(-((2 * value) - 3) * ((2 * value) - 1)) + 1);
};

Easing.exponentialEaseIn = function (value) {
    return (value == 0.0) ? value : Math.pow(2, 10 * (value - 1));
};

Easing.exponentialEaseOut = function (value) {
    return (value == 1.0) ? value : 1 - Math.pow(2, -10 * value);
};

Easing.exponentialEaseInOut = function (value) {
    if (value == 0.0 || value == 1.0)
        return value;

    if (value < 0.5)
        return 0.5 * Math.pow(2, (20 * value) - 10);
    else
        return -0.5 * Math.pow(2, (-20 * value) + 10) + 1;
};

Easing.elasticEaseIn = function (value) {
    return Math.sin(13 * Easing.HALF_PI * value) * Math.pow(2, 10 * (value - 1));
};

Easing.elasticEaseOut = function (value) {
    return Math.sin(-13 * Easing.HALF_PI * (value + 1)) * Math.pow(2, -10 * value) + 1;
};

Easing.elasticEaseInOut = function (value) {
    if (value < 0.5)
        return 0.5 * Math.sin(13 * Easing.HALF_PI * (2 * value)) * Math.pow(2, 10 * ((2 * value) - 1));
    else
        return 0.5 * (Math.sin(-13 * Easing.HALF_PI * ((2 * value - 1) + 1)) * Math.pow(2, -10 * (2 * value - 1)) + 2);
};

Easing.backEaseIn = function (value) {
    return value * value * value - value * Math.sin(value * Easing.PI);
};

Easing.backEaseOut = function (value) {
    var f = 1 - value;
    return 1 - (f * f * f - f * Math.sin(f * Easing.PI));
};

Easing.backEaseInOut = function (value) {
    if (value < 0.5) {
        var f = 2 * value;
        return 0.5 * (f * f * f - f * Math.sin(f * Easing.PI));
    } else {
        var f = (1 - (2 * value - 1));
        return 0.5 * (1 - (f * f * f - f * Math.sin(f * Easing.PI))) + 0.5;
    }
};

Easing.bounceEaseIn = function (value) {
    return 1 - Easing.bounceEaseOut(1 - value);
};

Easing.bounceEaseOut = function (value) {
    if (value < 4 / 11.0)
        return (121 * value * value) / 16.0;
    else if (value < 8 / 11.0)
        return (363 / 40.0 * value * value) - (99 / 10.0 * value) + 17 / 5.0;
    else if (value < 9 / 10.0)
        return (4356 / 361.0 * value * value) - (35442 / 1805.0 * value) + 16061 / 1805.0;
    else
        return (54 / 5.0 * value * value) - (513 / 25.0 * value) + 268 / 25.0;
};

Easing.boundEaseInOut = function (value) {
    if (value < 0.5)
        return 0.5 * Easing.bounceEaseIn(value * 2);
    else
        return 0.5 * Easing.bounceEaseOut(value * 2 - 1) + 0.5;
};
function DesignObjectHelper() { };

DesignObjectHelper.calculateTweenLocation = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    var result = {};

    result.x = designObject.x + ((nextKeyframeDesignObject.x - designObject.x) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    result.y = designObject.y + ((nextKeyframeDesignObject.y - designObject.y) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));

    return result;
}

DesignObjectHelper.calculatePivotTweenLocation = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    var result = {};

    result.x = designObject.pivotX + ((nextKeyframeDesignObject.pivotX - designObject.pivotX) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    result.y = designObject.pivotY + ((nextKeyframeDesignObject.pivotY - designObject.pivotY) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));

    return result;
}

DesignObjectHelper.calculateTweenSize = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    var result = {};

    result.width = designObject.width + ((nextKeyframeDesignObject.width - designObject.width) * (DesignObjectHelper.interpolate(keyframe, currentTime / totalTime)));
    result.height = designObject.height + ((nextKeyframeDesignObject.height - designObject.height) * (DesignObjectHelper.interpolate(keyframe, currentTime / totalTime)));

    return result;
}

DesignObjectHelper.calculateTweenAlpha = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    return designObject.alpha + ((nextKeyframeDesignObject.alpha - designObject.alpha) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
}

DesignObjectHelper.calculateTweenRotation = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    if (keyframe.rotationDirection == "clockwise")
        return designObject.rotation + ((nextKeyframeDesignObject.rotation - designObject.rotation) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    else
        return designObject.rotation - ((nextKeyframeDesignObject.rotation - designObject.rotation) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
}

DesignObjectHelper.calculateStrokeThickness = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    return designObject.strokeThickness + ((nextKeyframeDesignObject.strokeThickness - designObject.strokeThickness) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
}

DesignObjectHelper.calculateColor = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime, propertyName) {
    var currentColor = DesignObjectHelper.hexToRgb(designObject[propertyName]);
    var color = DesignObjectHelper.hexToRgb(nextKeyframeDesignObject[propertyName]);

    var newR = currentColor.r + ((color.r - currentColor.r) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    var newG = currentColor.g + ((color.g - currentColor.g) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    var newB = currentColor.b + ((color.b - currentColor.b) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));

    return DesignObjectHelper.rgbToHex(parseInt(newR), parseInt(newG), parseInt(newB));
}

DesignObjectHelper.componentToHex = function (c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

DesignObjectHelper.rgbToHex = function (r, g, b) {
    if (arguments.length == 1) {
        var rgb = r.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
        return DesignObjectHelper.rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    }
    return "#" + DesignObjectHelper.componentToHex(r) + DesignObjectHelper.componentToHex(g) + DesignObjectHelper.componentToHex(b);
}

DesignObjectHelper.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

DesignObjectHelper.calculateCornerRadius = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    return designObject.cornerRadius + ((nextKeyframeDesignObject.cornerRadius - designObject.cornerRadius) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
}

DesignObjectHelper.setLocation = function ($designObjectElement, location) {
    $designObjectElement.css("left", location.x + "px");
    $designObjectElement.css("top", location.y + "px");
}

DesignObjectHelper.setSize = function ($designObjectElement, size) {
    $designObjectElement.css("width", size.width + "px");
    $designObjectElement.css("height", size.height + "px");
}

DesignObjectHelper.setAlpha = function ($designObjectElement, designObject, alpha) {
    if (isNaN(alpha))
        debugger;
    if (designObject.alpha != alpha) {
        $designObjectElement.css("opacity", alpha / 100);
        designObject.alpha = alpha;
    }
}

DesignObjectHelper.setRotation = function ($designObjectElement, size, rotation, pivot) {
    $designObjectElement.css("transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-webkit-transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-moz-transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-ms-transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-o-transform-origin", pivot.x + "px " + pivot.y + "px");

    $designObjectElement.css("transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-webkit-transform-rotation", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-moz-transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-ms-transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-o-transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-khtml-transform", "rotate(" + rotation + "deg)");
}

DesignObjectHelper.setSizeAttributes = function ($designObjectElement, size) {
    $designObjectElement.attr("width", parseInt(size.width));
    $designObjectElement.attr("height", parseInt(size.height));
}

DesignObjectHelper.applyRotation = function ($designObjectElement, designObject) {
    var pivot = designObject.pivotLocation;
    var rotation = designObject.rotation;

    $designObjectElement.css("transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-webkit-transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-moz-transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-ms-transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-o-transform-origin", pivot.x + " " + pivot.y);

    $designObjectElement.css("transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-webkit-transform-rotation", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-moz-transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-ms-transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-o-transform", "rotate(" + rotation + "deg)");
    $designObjectElement.css("-khtml-transform", "rotate(" + rotation + "deg)");
}

DesignObjectHelper.applyCssClasses = function ($designObjectElement, designObject, layer, keyframe) {
    $designObjectElement.removeClass();
    $designObjectElement.addClass("vfabrika-default-design-object-style");
    $designObjectElement.addClass('vfabrika-design-object-style_' + layer.uniqueId + '_' + keyframe.uniqueId + '_' + designObject.uniqueId);
}

DesignObjectHelper.applyUserCssClasses = function ($designObjectElement, designObject) {
    if (designObject.className != undefined) {
        if (designObject.className.indexOf(' ') != -1) {
            $(designObject.className.split(' ')).each(function () {
                $designObjectElement.addClass(this.toString());
            });
        } else
            $designObjectElement.addClass(designObject.className);
    }
}

DesignObjectHelper.interpolate = function (keyframe, value) {
    if (keyframe.easingFunction == "linear")
        return Easing.linear(value);
    else if (keyframe.easingFunction == "quadratic_ease_in")
        return Easing.quadraticEaseIn(value);
    else if (keyframe.easingFunction == "quadratic_ease_out")
        return Easing.quadraticEaseOut(value);
    else if (keyframe.easingFunction == "quadratic_ease_in_out")
        return Easing.quadraticEaseInOut(value);
    else if (keyframe.easingFunction == "cubic_ease_in")
        return Easing.cubicEaseIn(value);
    else if (keyframe.easingFunction == "cubic_ease_out")
        return Easing.cubicEaseOut(value);
    else if (keyframe.easingFunction == "cubic_ease_in_out")
        return Easing.cubicEaseInOut(value);
    else if (keyframe.easingFunction == "quartic_ease_in")
        return Easing.quarticEaseIn(value);
    else if (keyframe.easingFunction == "quartic_ease_out")
        return Easing.quarticEaseOut(value);
    else if (keyframe.easingFunction == "quartic_ease_in_out")
        return Easing.quarticEaseInOut(value);
    else if (keyframe.easingFunction == "quintic_ease_in")
        return Easing.quinticEaseIn(value);
    else if (keyframe.easingFunction == "quintic_ease_out")
        return Easing.quinticEaseInOut(value);
    else if (keyframe.easingFunction == "sine_ease_in")
        return Easing.sineEaseIn(value);
    else if (keyframe.easingFunction == "sine_ease_out")
        return Easing.sineEaseOut(value);
    else if (keyframe.easingFunction == "sine_ease_in_out")
        return Easing.sineEaseInOut(value);
    else if (keyframe.easingFunction == "circular_ease_in")
        return Easing.circularEaseIn(value);
    else if (keyframe.easingFunction == "circular_ease_out")
        return Easing.circularEaseOut(value);
    else if (keyframe.easingFunction == "circular_ease_in_out")
        return Easing.circularEaseInOut(value);
    else if (keyframe.easingFunction == "exponential_ease_in")
        return Easing.exponentialEaseIn(value);
    else if (keyframe.easingFunction == "exponential_ease_out")
        return Easing.exponentialEaseOut(value);
    else if (keyframe.easingFunction == "exponential_ease_in_out")
        return Easing.exponentialEaseInOut(value);
    else if (keyframe.easingFunction == "elastic_ease_in")
        return Easing.elasticEaseIn(value);
    else if (keyframe.easingFunction == "elastic_ease_out")
        return Easing.elasticEaseOut(value);
    else if (keyframe.easingFunction == "elastic_ease_in_out")
        return Easing.elasticEaseInOut(value);
    else if (keyframe.easingFunction == "back_ease_in")
        return Easing.backEaseIn(value);
    else if (keyframe.easingFunction == "back_ease_out")
        return Easing.backEaseOut(value);
    else if (keyframe.easingFunction == "back_ease_in_out")
        return Easing.backEaseInOut(value);
    else if (keyframe.easingFunction == "bounce_ease_in")
        return Easing.bounceEaseIn(value);
    else if (keyframe.easingFunction == "bounce_ease_out")
        return Easing.bounceEaseOut(value);
    else if (keyframe.easingFunction == "bounce_ease_in_out")
        return Easing.bounceEaseInOut(value);
    else
        throw new Error("Unsupported easing type [" + keyframe.easingFunction + "]");
};
var DesignObjectBlocksControllerHelper = {};

DesignObjectBlocksControllerHelper.setUserClass = function (classText, value) {
    var classNames = classText.split(' ');

    // detach VFabrika- class names from class attribute
    var vFabrikaClassNames = new Array();

    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];

        if (VFabrikaHelper.startsWith(className, "vfabrika-"))
            vFabrikaClassNames.push(className);
    }

    // split new user class names
    var userClassNames = value.split(' ');

    // add VFabrika class names into new class names text
    var newClassNamesText = "";

    for (var i = 0; i < vFabrikaClassNames.length; i++) {
        newClassNamesText += vFabrikaClassNames[i];
        if (i != vFabrikaClassNames.length - 1)
            newClassNamesText += " ";
    }

    // add new user class names
    if (userClassNames.length > 0) {
        newClassNamesText += " ";

        for (var i = 0; i < userClassNames.length; i++) {
            newClassNamesText += userClassNames[i];

            if (i != userClassNames.length - 1)
                newClassNamesText += " ";
        }
    }

    return newClassNamesText;
};

DesignObjectBlocksControllerHelper.getUserClass = function (classText) {
    var classNames = classText.split(' ');

    var userClassNames = new Array();

    // filter only user classes
    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];

        if (!className.startsWith("vfabrika-"))
            userClassNames.push(className);
    }

    // generate (user class names only) result
    var result = "";

    for (var i = 0; i < userClassNames.length; i++) {
        result += userClassNames[i];

        if (i != userClassNames.length - 1)
            result += " ";
    }

    return result;
};


DesignObjectBlocksControllerHelper.getProperty = function (designObject, $designObjectElement, propertyName) {
    if (propertyName.toLowerCase() == "x".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("left").replace("px", "")) };
    else if (propertyName.toLowerCase() == "y".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("top").replace("px", "")) };
    else if (propertyName.toLowerCase() == "width".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("width").replace("px", "")) };
    else if (propertyName.toLowerCase() == "height".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("height").replace("px", "")) };
    else if (propertyName.toLowerCase() == "enabled".toLowerCase())
        return { hasReturnValue: true, value: designObject.enabled };
    else if (propertyName.toLowerCase() == "visible".toLowerCase())
        return { hasReturnValue: true, value: designObject.visible };
    else if (propertyName.toLowerCase() == "alpha".toLowerCase())
        return { hasReturnValue: true, value: designObject.alpha };
    else if (propertyName.toLowerCase() == "rotation".toLowerCase())
        return { hasReturnValue: true, value: designObject.rotation };
    else if (propertyName.toLowerCase() == "isDraggable".toLowerCase())
        return { hasReturnValue: true, value: designObject.isDraggable };
    else if (propertyName.toLowerCase() == "isDroppable".toLowerCase())
        return { hasReturnValue: true, value: designObject.isDroppable };
    else if (propertyName.toLowerCase() == "className".toLowerCase())
        return { hasReturnValue: true, value: DesignObjectBlocksControllerHelper.getUserClass($designObjectElement.attr("class")) };
    else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
        return { hasReturnValue: true, value: designObject.useHandCursor }
    else if (propertyName.toLowerCase() == "tag".toLowerCase())
        return { hasReturnValue: true, value: designObject.tag };
    else
        return null;
};

DesignObjectBlocksControllerHelper.setProperty = function (designObject, $designObjectElement, propertyName, value) {
    if (propertyName.toLowerCase() == "x".toLowerCase()) {
        $designObjectElement.css("left", value + "px");
        designObject.x = value;
        return true;
    } else if (propertyName.toLowerCase() == "y".toLowerCase()) {
        $designObjectElement.css("top", value + "px");
        designObject.y = value;
        return true;
    } else if (propertyName.toLowerCase() == "width".toLowerCase()) {
        $designObjectElement.css("width", value + "px");
        designObject.width = value;
        return true;
    } else if (propertyName.toLowerCase() == "height".toLowerCase()) {
        $designObjectElement.css("height", value + "px");
        designObject.height = value;
        return true;
    } else if (propertyName.toLowerCase() == "enabled".toLowerCase()) {
        if (!value)
            $designObjectElement.attr("disabled", "disabled");
        else
            $designObjectElement.removeAttr("disabled");
        designObject.enabled = value;
        return true;
    } else if (propertyName.toLowerCase() == "visible".toLowerCase()) {
        if (!value)
            $designObjectElement.css("display", "none");
        else
            $designObjectElement.css("display", "block");
        designObject.visible = value;
        return true;
    } else if (propertyName.toLowerCase() == "alpha".toLowerCase()) {
        if (value < 0)
            value = 0;

        if (value > 100)
            value = 100;

        designObject.alpha = value;

        value = parseFloat(value / 100);
        $designObjectElement.css("opacity", value);
        return true;
    } else if (propertyName.toLowerCase() == "rotation".toLowerCase()) {
        designObject.rotation = value;
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
        return true;
    } else if (propertyName.toLowerCase() == "isDraggable".toLowerCase()) {
        designObject.isDraggable = value;

        if (value)
            player.enableDesignObjectAsDraggable(id);
        else
            player.disableDesignObjectAsDraggable(id);

        return true;
    } else if (propertyName.toLowerCase() == "isDroppable".toLowerCase()) {
        designObject.isDroppable = value;

        if (value)
            player.enableDesignObjectAsDroppable(id);
        else
            player.disableDesignObjectAsDroppable(id);

        return true;
    } else if (propertyName.toLowerCase() == "className".toLowerCase()) {
        var classNames = $designObjectElement.attr("class");
        classNames = DesignObjectBlocksControllerHelper.setUserClass(classNames, value);
        $designObjectElement.attr("class", classNames);
        return true;
    } else if (propertyName.toLowerCase() == "tag".toLowerCase()) {
        designObject.tag = value;
        return true;
    } else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
        if (!value)
            $designObjectElement.css("cursor", "default");
        else
            $designObjectElement.css("cursor", "pointer");

        designObject.useHandCursor = value;
        return true;
    }
    else
        return false;
};
