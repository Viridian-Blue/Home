gdjs.LV1Code = {};
gdjs.LV1Code.GDPlayerObjects1= [];
gdjs.LV1Code.GDPlayerObjects2= [];
gdjs.LV1Code.GDLavaObjects1= [];
gdjs.LV1Code.GDLavaObjects2= [];
gdjs.LV1Code.GDWaterObjects1= [];
gdjs.LV1Code.GDWaterObjects2= [];
gdjs.LV1Code.GDLadderObjects1= [];
gdjs.LV1Code.GDLadderObjects2= [];
gdjs.LV1Code.GDGrassObjects1= [];
gdjs.LV1Code.GDGrassObjects2= [];
gdjs.LV1Code.GDPathObjects1= [];
gdjs.LV1Code.GDPathObjects2= [];
gdjs.LV1Code.GDTreeObjects1= [];
gdjs.LV1Code.GDTreeObjects2= [];
gdjs.LV1Code.GDSpecialWaterObjects1= [];
gdjs.LV1Code.GDSpecialWaterObjects2= [];
gdjs.LV1Code.GDCaveObjects1= [];
gdjs.LV1Code.GDCaveObjects2= [];
gdjs.LV1Code.GDCastleObjects1= [];
gdjs.LV1Code.GDCastleObjects2= [];
gdjs.LV1Code.GDSlimeObjects1= [];
gdjs.LV1Code.GDSlimeObjects2= [];

gdjs.LV1Code.conditionTrue_0 = {val:false};
gdjs.LV1Code.condition0IsTrue_0 = {val:false};
gdjs.LV1Code.condition1IsTrue_0 = {val:false};
gdjs.LV1Code.condition2IsTrue_0 = {val:false};
gdjs.LV1Code.conditionTrue_1 = {val:false};
gdjs.LV1Code.condition0IsTrue_1 = {val:false};
gdjs.LV1Code.condition1IsTrue_1 = {val:false};
gdjs.LV1Code.condition2IsTrue_1 = {val:false};


gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LV1Code.GDPlayerObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.LV1Code.GDTreeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.LV1Code.GDTreeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.LV1Code.GDSlimeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.LV1Code.GDTreeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.LV1Code.GDTreeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LV1Code.GDPlayerObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.LV1Code.GDWaterObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.LV1Code.GDWaterObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.LV1Code.GDSlimeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.LV1Code.GDWaterObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.LV1Code.GDWaterObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.LV1Code.GDSlimeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.LV1Code.GDLavaObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LV1Code.GDPlayerObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.LV1Code.GDLavaObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LV1Code.GDPlayerObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSpecialWaterObjects1Objects = Hashtable.newFrom({"SpecialWater": gdjs.LV1Code.GDSpecialWaterObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LV1Code.GDPlayerObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDCaveObjects1Objects = Hashtable.newFrom({"Cave": gdjs.LV1Code.GDCaveObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LV1Code.GDPlayerObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.LV1Code.GDSlimeObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LV1Code.GDPlayerObjects1});gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDCastleObjects1Objects = Hashtable.newFrom({"Castle": gdjs.LV1Code.GDCastleObjects1});gdjs.LV1Code.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


{
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.LV1Code.GDPlayerObjects1.length !== 0 ? gdjs.LV1Code.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.LV1Code.GDTreeObjects1.createFrom(runtimeScene.getObjects("Tree"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDPlayerObjects1 */
/* Reuse gdjs.LV1Code.GDTreeObjects1 */
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects);
}
}}

}


{

gdjs.LV1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
gdjs.LV1Code.GDTreeObjects1.createFrom(runtimeScene.getObjects("Tree"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDSlimeObjects1 */
/* Reuse gdjs.LV1Code.GDTreeObjects1 */
{for(var i = 0, len = gdjs.LV1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDSlimeObjects1[i].separateFromObjectsList(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDTreeObjects1Objects);
}
}}

}


{

gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.LV1Code.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDPlayerObjects1 */
/* Reuse gdjs.LV1Code.GDWaterObjects1 */
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects);
}
}}

}


{

gdjs.LV1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
gdjs.LV1Code.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDSlimeObjects1 */
/* Reuse gdjs.LV1Code.GDWaterObjects1 */
{for(var i = 0, len = gdjs.LV1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDSlimeObjects1[i].separateFromObjectsList(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDWaterObjects1Objects);
}
}}

}


{

gdjs.LV1Code.GDLavaObjects1.createFrom(runtimeScene.getObjects("Lava"));
gdjs.LV1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDLavaObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDSlimeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.LV1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.LV1Code.GDLavaObjects1.createFrom(runtimeScene.getObjects("Lava"));
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDLavaObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{

gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.LV1Code.GDSpecialWaterObjects1.createFrom(runtimeScene.getObjects("SpecialWater"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSpecialWaterObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UnderWater", false);
}}

}


{

gdjs.LV1Code.GDCaveObjects1.createFrom(runtimeScene.getObjects("Cave"));
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDCaveObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cave", false);
}}

}


{

gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.LV1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDSlimeObjects1Objects, false, runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].setAnimationName("Right_Walk");
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].setAnimationName("Left_Walk");
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].setAnimationName("Stop");
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].setAnimationName("Up_Walk");
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
{gdjs.LV1Code.conditionTrue_1 = gdjs.LV1Code.condition0IsTrue_0;
gdjs.LV1Code.condition0IsTrue_1.val = true;
{
gdjs.LV1Code.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}gdjs.LV1Code.conditionTrue_1.val = !gdjs.LV1Code.condition0IsTrue_1.val;
}
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.LV1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDPlayerObjects1[i].setAnimationName("Stop");
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.LV1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
{for(var i = 0, len = gdjs.LV1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDSlimeObjects1[i].addForceTowardObject((gdjs.LV1Code.GDPlayerObjects1.length !== 0 ? gdjs.LV1Code.GDPlayerObjects1[0] : null), 1, 1);
}
}}

}


{

gdjs.LV1Code.GDCastleObjects1.createFrom(runtimeScene.getObjects("Castle"));
gdjs.LV1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
{gdjs.LV1Code.conditionTrue_1 = gdjs.LV1Code.condition0IsTrue_0;
gdjs.LV1Code.condition0IsTrue_1.val = false;
gdjs.LV1Code.condition1IsTrue_1.val = false;
{
gdjs.LV1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 3;
}if ( gdjs.LV1Code.condition0IsTrue_1.val ) {
{
gdjs.LV1Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDPlayerObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDCastleObjects1Objects, false, runtimeScene);
}}
gdjs.LV1Code.conditionTrue_1.val = true && gdjs.LV1Code.condition0IsTrue_1.val && gdjs.LV1Code.condition1IsTrue_1.val;
}
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Castle", false);
}}

}


}; //End of gdjs.LV1Code.eventsList0xb0b28


gdjs.LV1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.LV1Code.GDPlayerObjects1.length = 0;
gdjs.LV1Code.GDPlayerObjects2.length = 0;
gdjs.LV1Code.GDLavaObjects1.length = 0;
gdjs.LV1Code.GDLavaObjects2.length = 0;
gdjs.LV1Code.GDWaterObjects1.length = 0;
gdjs.LV1Code.GDWaterObjects2.length = 0;
gdjs.LV1Code.GDLadderObjects1.length = 0;
gdjs.LV1Code.GDLadderObjects2.length = 0;
gdjs.LV1Code.GDGrassObjects1.length = 0;
gdjs.LV1Code.GDGrassObjects2.length = 0;
gdjs.LV1Code.GDPathObjects1.length = 0;
gdjs.LV1Code.GDPathObjects2.length = 0;
gdjs.LV1Code.GDTreeObjects1.length = 0;
gdjs.LV1Code.GDTreeObjects2.length = 0;
gdjs.LV1Code.GDSpecialWaterObjects1.length = 0;
gdjs.LV1Code.GDSpecialWaterObjects2.length = 0;
gdjs.LV1Code.GDCaveObjects1.length = 0;
gdjs.LV1Code.GDCaveObjects2.length = 0;
gdjs.LV1Code.GDCastleObjects1.length = 0;
gdjs.LV1Code.GDCastleObjects2.length = 0;
gdjs.LV1Code.GDSlimeObjects1.length = 0;
gdjs.LV1Code.GDSlimeObjects2.length = 0;

gdjs.LV1Code.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['LV1Code'] = gdjs.LV1Code;
