gdjs.CaveCode = {};
gdjs.CaveCode.GDPlayerObjects1= [];
gdjs.CaveCode.GDPlayerObjects2= [];
gdjs.CaveCode.GDLavaObjects1= [];
gdjs.CaveCode.GDLavaObjects2= [];
gdjs.CaveCode.GDWaterObjects1= [];
gdjs.CaveCode.GDWaterObjects2= [];
gdjs.CaveCode.GDLadderObjects1= [];
gdjs.CaveCode.GDLadderObjects2= [];
gdjs.CaveCode.GDWolfObjects1= [];
gdjs.CaveCode.GDWolfObjects2= [];
gdjs.CaveCode.GDCaveFloorObjects1= [];
gdjs.CaveCode.GDCaveFloorObjects2= [];
gdjs.CaveCode.GDCaveWallObjects1= [];
gdjs.CaveCode.GDCaveWallObjects2= [];

gdjs.CaveCode.conditionTrue_0 = {val:false};
gdjs.CaveCode.condition0IsTrue_0 = {val:false};
gdjs.CaveCode.condition1IsTrue_0 = {val:false};
gdjs.CaveCode.conditionTrue_1 = {val:false};
gdjs.CaveCode.condition0IsTrue_1 = {val:false};
gdjs.CaveCode.condition1IsTrue_1 = {val:false};


gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CaveCode.GDPlayerObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects = Hashtable.newFrom({"CaveWall": gdjs.CaveCode.GDCaveWallObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects = Hashtable.newFrom({"CaveWall": gdjs.CaveCode.GDCaveWallObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDWolfObjects1Objects = Hashtable.newFrom({"Wolf": gdjs.CaveCode.GDWolfObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects = Hashtable.newFrom({"CaveWall": gdjs.CaveCode.GDCaveWallObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects = Hashtable.newFrom({"CaveWall": gdjs.CaveCode.GDCaveWallObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDWolfObjects1Objects = Hashtable.newFrom({"Wolf": gdjs.CaveCode.GDWolfObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.CaveCode.GDLavaObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CaveCode.GDPlayerObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.CaveCode.GDLavaObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CaveCode.GDPlayerObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDLadderObjects1Objects = Hashtable.newFrom({"Ladder": gdjs.CaveCode.GDLadderObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CaveCode.GDPlayerObjects1});gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDWolfObjects1Objects = Hashtable.newFrom({"Wolf": gdjs.CaveCode.GDWolfObjects1});gdjs.CaveCode.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.CaveCode.GDWolfObjects1.createFrom(runtimeScene.getObjects("Wolf"));
{for(var i = 0, len = gdjs.CaveCode.GDWolfObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDWolfObjects1[i].addForceTowardObject((gdjs.CaveCode.GDPlayerObjects1.length !== 0 ? gdjs.CaveCode.GDPlayerObjects1[0] : null), 1, 1);
}
}}

}


{

gdjs.CaveCode.GDCaveWallObjects1.createFrom(runtimeScene.getObjects("CaveWall"));
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects, gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects, false, runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CaveCode.GDCaveWallObjects1 */
/* Reuse gdjs.CaveCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects);
}
}}

}


{

gdjs.CaveCode.GDCaveWallObjects1.createFrom(runtimeScene.getObjects("CaveWall"));
gdjs.CaveCode.GDWolfObjects1.createFrom(runtimeScene.getObjects("Wolf"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDWolfObjects1Objects, gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects, false, runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CaveCode.GDCaveWallObjects1 */
/* Reuse gdjs.CaveCode.GDWolfObjects1 */
{for(var i = 0, len = gdjs.CaveCode.GDWolfObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDWolfObjects1[i].separateFromObjectsList(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDCaveWallObjects1Objects);
}
}}

}


{

gdjs.CaveCode.GDLavaObjects1.createFrom(runtimeScene.getObjects("Lava"));
gdjs.CaveCode.GDWolfObjects1.createFrom(runtimeScene.getObjects("Wolf"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDWolfObjects1Objects, gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDLavaObjects1Objects, false, runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CaveCode.GDWolfObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.CaveCode.GDWolfObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDWolfObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.CaveCode.GDLavaObjects1.createFrom(runtimeScene.getObjects("Lava"));
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects, gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDLavaObjects1Objects, false, runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{

gdjs.CaveCode.GDLadderObjects1.createFrom(runtimeScene.getObjects("Ladder"));
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects, gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDLadderObjects1Objects, false, runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV1", false);
}}

}


{

gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.CaveCode.GDWolfObjects1.createFrom(runtimeScene.getObjects("Wolf"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDPlayerObjects1Objects, gdjs.CaveCode.mapOfGDgdjs_46CaveCode_46GDWolfObjects1Objects, false, runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{


{
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.CaveCode.GDPlayerObjects1.length !== 0 ? gdjs.CaveCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].setAnimationName("Right_Walk");
}
}}

}


{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].setAnimationName("Left_Walk");
}
}}

}


{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].setAnimationName("Stop");
}
}}

}


{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].setAnimationName("Up_Walk");
}
}}

}


{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
{gdjs.CaveCode.conditionTrue_1 = gdjs.CaveCode.condition0IsTrue_0;
gdjs.CaveCode.condition0IsTrue_1.val = true;
{
gdjs.CaveCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}gdjs.CaveCode.conditionTrue_1.val = !gdjs.CaveCode.condition0IsTrue_1.val;
}
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
gdjs.CaveCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.CaveCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDPlayerObjects1[i].setAnimationName("Stop");
}
}}

}


}; //End of gdjs.CaveCode.eventsList0xb0b28


gdjs.CaveCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CaveCode.GDPlayerObjects1.length = 0;
gdjs.CaveCode.GDPlayerObjects2.length = 0;
gdjs.CaveCode.GDLavaObjects1.length = 0;
gdjs.CaveCode.GDLavaObjects2.length = 0;
gdjs.CaveCode.GDWaterObjects1.length = 0;
gdjs.CaveCode.GDWaterObjects2.length = 0;
gdjs.CaveCode.GDLadderObjects1.length = 0;
gdjs.CaveCode.GDLadderObjects2.length = 0;
gdjs.CaveCode.GDWolfObjects1.length = 0;
gdjs.CaveCode.GDWolfObjects2.length = 0;
gdjs.CaveCode.GDCaveFloorObjects1.length = 0;
gdjs.CaveCode.GDCaveFloorObjects2.length = 0;
gdjs.CaveCode.GDCaveWallObjects1.length = 0;
gdjs.CaveCode.GDCaveWallObjects2.length = 0;

gdjs.CaveCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['CaveCode'] = gdjs.CaveCode;
