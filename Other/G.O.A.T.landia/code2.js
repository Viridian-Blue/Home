gdjs.UnderWaterCode = {};
gdjs.UnderWaterCode.GDPlayerObjects1= [];
gdjs.UnderWaterCode.GDPlayerObjects2= [];
gdjs.UnderWaterCode.GDLavaObjects1= [];
gdjs.UnderWaterCode.GDLavaObjects2= [];
gdjs.UnderWaterCode.GDWaterObjects1= [];
gdjs.UnderWaterCode.GDWaterObjects2= [];
gdjs.UnderWaterCode.GDLadderObjects1= [];
gdjs.UnderWaterCode.GDLadderObjects2= [];
gdjs.UnderWaterCode.GDSeaFloorObjects1= [];
gdjs.UnderWaterCode.GDSeaFloorObjects2= [];
gdjs.UnderWaterCode.GDSeaKingObjects1= [];
gdjs.UnderWaterCode.GDSeaKingObjects2= [];

gdjs.UnderWaterCode.conditionTrue_0 = {val:false};
gdjs.UnderWaterCode.condition0IsTrue_0 = {val:false};
gdjs.UnderWaterCode.condition1IsTrue_0 = {val:false};
gdjs.UnderWaterCode.conditionTrue_1 = {val:false};
gdjs.UnderWaterCode.condition0IsTrue_1 = {val:false};
gdjs.UnderWaterCode.condition1IsTrue_1 = {val:false};


gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UnderWaterCode.GDPlayerObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.UnderWaterCode.GDWaterObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.UnderWaterCode.GDWaterObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDSeaKingObjects1Objects = Hashtable.newFrom({"SeaKing": gdjs.UnderWaterCode.GDSeaKingObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.UnderWaterCode.GDWaterObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.UnderWaterCode.GDWaterObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDSeaKingObjects1Objects = Hashtable.newFrom({"SeaKing": gdjs.UnderWaterCode.GDSeaKingObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.UnderWaterCode.GDLavaObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UnderWaterCode.GDPlayerObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.UnderWaterCode.GDLavaObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UnderWaterCode.GDPlayerObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDLadderObjects1Objects = Hashtable.newFrom({"Ladder": gdjs.UnderWaterCode.GDLadderObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UnderWaterCode.GDPlayerObjects1});gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDSeaKingObjects1Objects = Hashtable.newFrom({"SeaKing": gdjs.UnderWaterCode.GDSeaKingObjects1});gdjs.UnderWaterCode.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].setAnimationName("Right_Walk");
}
}}

}


{


gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].setAnimationName("Left_Walk");
}
}}

}


{


gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].setAnimationName("Stop");
}
}}

}


{


gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].setAnimationName("Up_Walk");
}
}}

}


{


gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
{gdjs.UnderWaterCode.conditionTrue_1 = gdjs.UnderWaterCode.condition0IsTrue_0;
gdjs.UnderWaterCode.condition0IsTrue_1.val = true;
{
gdjs.UnderWaterCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}gdjs.UnderWaterCode.conditionTrue_1.val = !gdjs.UnderWaterCode.condition0IsTrue_1.val;
}
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].setAnimationName("Stop");
}
}}

}


{

gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.UnderWaterCode.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));

gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects, gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects, false, runtimeScene);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UnderWaterCode.GDPlayerObjects1 */
/* Reuse gdjs.UnderWaterCode.GDWaterObjects1 */
{for(var i = 0, len = gdjs.UnderWaterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects);
}
}}

}


{


{
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.UnderWaterCode.GDPlayerObjects1.length !== 0 ? gdjs.UnderWaterCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.UnderWaterCode.GDSeaKingObjects1.createFrom(runtimeScene.getObjects("SeaKing"));
{for(var i = 0, len = gdjs.UnderWaterCode.GDSeaKingObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDSeaKingObjects1[i].addForceTowardObject((gdjs.UnderWaterCode.GDPlayerObjects1.length !== 0 ? gdjs.UnderWaterCode.GDPlayerObjects1[0] : null), 1, 1);
}
}}

}


{

gdjs.UnderWaterCode.GDSeaKingObjects1.createFrom(runtimeScene.getObjects("SeaKing"));
gdjs.UnderWaterCode.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));

gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDSeaKingObjects1Objects, gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects, false, runtimeScene);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UnderWaterCode.GDSeaKingObjects1 */
/* Reuse gdjs.UnderWaterCode.GDWaterObjects1 */
{for(var i = 0, len = gdjs.UnderWaterCode.GDSeaKingObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDSeaKingObjects1[i].separateFromObjectsList(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDWaterObjects1Objects);
}
}}

}


{

gdjs.UnderWaterCode.GDLavaObjects1.createFrom(runtimeScene.getObjects("Lava"));
gdjs.UnderWaterCode.GDSeaKingObjects1.createFrom(runtimeScene.getObjects("SeaKing"));

gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDSeaKingObjects1Objects, gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDLavaObjects1Objects, false, runtimeScene);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UnderWaterCode.GDSeaKingObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.UnderWaterCode.GDSeaKingObjects1.length ;i < len;++i) {
    gdjs.UnderWaterCode.GDSeaKingObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.UnderWaterCode.GDLavaObjects1.createFrom(runtimeScene.getObjects("Lava"));
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects, gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDLavaObjects1Objects, false, runtimeScene);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{

gdjs.UnderWaterCode.GDLadderObjects1.createFrom(runtimeScene.getObjects("Ladder"));
gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects, gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDLadderObjects1Objects, false, runtimeScene);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV1", false);
}}

}


{

gdjs.UnderWaterCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.UnderWaterCode.GDSeaKingObjects1.createFrom(runtimeScene.getObjects("SeaKing"));

gdjs.UnderWaterCode.condition0IsTrue_0.val = false;
{
gdjs.UnderWaterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDPlayerObjects1Objects, gdjs.UnderWaterCode.mapOfGDgdjs_46UnderWaterCode_46GDSeaKingObjects1Objects, false, runtimeScene);
}if (gdjs.UnderWaterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


}; //End of gdjs.UnderWaterCode.eventsList0xb0b28


gdjs.UnderWaterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.UnderWaterCode.GDPlayerObjects1.length = 0;
gdjs.UnderWaterCode.GDPlayerObjects2.length = 0;
gdjs.UnderWaterCode.GDLavaObjects1.length = 0;
gdjs.UnderWaterCode.GDLavaObjects2.length = 0;
gdjs.UnderWaterCode.GDWaterObjects1.length = 0;
gdjs.UnderWaterCode.GDWaterObjects2.length = 0;
gdjs.UnderWaterCode.GDLadderObjects1.length = 0;
gdjs.UnderWaterCode.GDLadderObjects2.length = 0;
gdjs.UnderWaterCode.GDSeaFloorObjects1.length = 0;
gdjs.UnderWaterCode.GDSeaFloorObjects2.length = 0;
gdjs.UnderWaterCode.GDSeaKingObjects1.length = 0;
gdjs.UnderWaterCode.GDSeaKingObjects2.length = 0;

gdjs.UnderWaterCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['UnderWaterCode'] = gdjs.UnderWaterCode;
