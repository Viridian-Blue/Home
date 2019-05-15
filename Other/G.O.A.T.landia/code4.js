gdjs.CastleCode = {};
gdjs.CastleCode.GDPlayerObjects1= [];
gdjs.CastleCode.GDPlayerObjects2= [];
gdjs.CastleCode.GDLavaObjects1= [];
gdjs.CastleCode.GDLavaObjects2= [];
gdjs.CastleCode.GDWaterObjects1= [];
gdjs.CastleCode.GDWaterObjects2= [];
gdjs.CastleCode.GDLadderObjects1= [];
gdjs.CastleCode.GDLadderObjects2= [];
gdjs.CastleCode.GDCastleWallObjects1= [];
gdjs.CastleCode.GDCastleWallObjects2= [];
gdjs.CastleCode.GDFloorObjects1= [];
gdjs.CastleCode.GDFloorObjects2= [];
gdjs.CastleCode.GDgoatObjects1= [];
gdjs.CastleCode.GDgoatObjects2= [];

gdjs.CastleCode.conditionTrue_0 = {val:false};
gdjs.CastleCode.condition0IsTrue_0 = {val:false};
gdjs.CastleCode.condition1IsTrue_0 = {val:false};
gdjs.CastleCode.condition2IsTrue_0 = {val:false};


gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CastleCode.GDPlayerObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.CastleCode.GDWaterObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.CastleCode.GDWaterObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects = Hashtable.newFrom({"goat": gdjs.CastleCode.GDgoatObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.CastleCode.GDWaterObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.CastleCode.GDWaterObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects = Hashtable.newFrom({"goat": gdjs.CastleCode.GDgoatObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.CastleCode.GDFloorObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.CastleCode.GDFloorObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CastleCode.GDPlayerObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects = Hashtable.newFrom({"goat": gdjs.CastleCode.GDgoatObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CastleCode.GDPlayerObjects1});gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects = Hashtable.newFrom({"goat": gdjs.CastleCode.GDgoatObjects1});gdjs.CastleCode.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.CastleCode.condition0IsTrue_0.val = false;
{
gdjs.CastleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CastleCode.condition0IsTrue_0.val) {
gdjs.CastleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.CastleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.CastleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDPlayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.CastleCode.GDgoatObjects1.createFrom(runtimeScene.getObjects("goat"));

gdjs.CastleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CastleCode.GDgoatObjects1.length;i<l;++i) {
    if ( gdjs.CastleCode.GDgoatObjects1[i].getDirectionOrAngle() == 90 ) {
        gdjs.CastleCode.condition0IsTrue_0.val = true;
        gdjs.CastleCode.GDgoatObjects1[k] = gdjs.CastleCode.GDgoatObjects1[i];
        ++k;
    }
}
gdjs.CastleCode.GDgoatObjects1.length = k;}if (gdjs.CastleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CastleCode.GDgoatObjects1 */
{for(var i = 0, len = gdjs.CastleCode.GDgoatObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDgoatObjects1[i].setAnimationName("Goat");
}
}}

}


{

gdjs.CastleCode.GDgoatObjects1.createFrom(runtimeScene.getObjects("goat"));

gdjs.CastleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CastleCode.GDgoatObjects1.length;i<l;++i) {
    if ( gdjs.CastleCode.GDgoatObjects1[i].getDirectionOrAngle() == 270 ) {
        gdjs.CastleCode.condition0IsTrue_0.val = true;
        gdjs.CastleCode.GDgoatObjects1[k] = gdjs.CastleCode.GDgoatObjects1[i];
        ++k;
    }
}
gdjs.CastleCode.GDgoatObjects1.length = k;}if (gdjs.CastleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CastleCode.GDgoatObjects1 */
{for(var i = 0, len = gdjs.CastleCode.GDgoatObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDgoatObjects1[i].setAnimationName("Goat_Left");
}
}}

}


{

gdjs.CastleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.CastleCode.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));

gdjs.CastleCode.condition0IsTrue_0.val = false;
{
gdjs.CastleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDPlayerObjects1Objects, gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects, false, runtimeScene);
}if (gdjs.CastleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CastleCode.GDPlayerObjects1 */
/* Reuse gdjs.CastleCode.GDWaterObjects1 */
{for(var i = 0, len = gdjs.CastleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects);
}
}}

}


{

gdjs.CastleCode.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));
gdjs.CastleCode.GDgoatObjects1.createFrom(runtimeScene.getObjects("goat"));

gdjs.CastleCode.condition0IsTrue_0.val = false;
{
gdjs.CastleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects, gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects, false, runtimeScene);
}if (gdjs.CastleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CastleCode.GDWaterObjects1 */
/* Reuse gdjs.CastleCode.GDgoatObjects1 */
{for(var i = 0, len = gdjs.CastleCode.GDgoatObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDgoatObjects1[i].separateFromObjectsList(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDWaterObjects1Objects);
}
}}

}


{

gdjs.CastleCode.GDFloorObjects1.createFrom(runtimeScene.getObjects("Floor"));
gdjs.CastleCode.GDgoatObjects1.createFrom(runtimeScene.getObjects("goat"));

gdjs.CastleCode.condition0IsTrue_0.val = false;
{
gdjs.CastleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects, gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDFloorObjects1Objects, false, runtimeScene);
}if (gdjs.CastleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CastleCode.GDFloorObjects1 */
/* Reuse gdjs.CastleCode.GDgoatObjects1 */
{for(var i = 0, len = gdjs.CastleCode.GDgoatObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDgoatObjects1[i].separateFromObjectsList(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDFloorObjects1Objects);
}
}}

}


{

gdjs.CastleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.CastleCode.GDgoatObjects1.createFrom(runtimeScene.getObjects("goat"));

gdjs.CastleCode.condition0IsTrue_0.val = false;
{
gdjs.CastleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDPlayerObjects1Objects, gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects, false, runtimeScene);
}if (gdjs.CastleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{


gdjs.CastleCode.condition0IsTrue_0.val = false;
{
gdjs.CastleCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.CastleCode.condition0IsTrue_0.val) {
gdjs.CastleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.CastleCode.GDgoatObjects1.createFrom(runtimeScene.getObjects("goat"));
{for(var i = 0, len = gdjs.CastleCode.GDgoatObjects1.length ;i < len;++i) {
    gdjs.CastleCode.GDgoatObjects1[i].addForceTowardObject((gdjs.CastleCode.GDPlayerObjects1.length !== 0 ? gdjs.CastleCode.GDPlayerObjects1[0] : null), 1, 1);
}
}}

}


{

gdjs.CastleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.CastleCode.GDgoatObjects1.createFrom(runtimeScene.getObjects("goat"));

gdjs.CastleCode.condition0IsTrue_0.val = false;
gdjs.CastleCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CastleCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CastleCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.CastleCode.condition0IsTrue_0.val = true;
        gdjs.CastleCode.GDPlayerObjects1[k] = gdjs.CastleCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CastleCode.GDPlayerObjects1.length = k;}if ( gdjs.CastleCode.condition0IsTrue_0.val ) {
{
gdjs.CastleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDPlayerObjects1Objects, gdjs.CastleCode.mapOfGDgdjs_46CastleCode_46GDgoatObjects1Objects, false, runtimeScene);
}}
if (gdjs.CastleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}}

}


}; //End of gdjs.CastleCode.eventsList0xb0b28


gdjs.CastleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CastleCode.GDPlayerObjects1.length = 0;
gdjs.CastleCode.GDPlayerObjects2.length = 0;
gdjs.CastleCode.GDLavaObjects1.length = 0;
gdjs.CastleCode.GDLavaObjects2.length = 0;
gdjs.CastleCode.GDWaterObjects1.length = 0;
gdjs.CastleCode.GDWaterObjects2.length = 0;
gdjs.CastleCode.GDLadderObjects1.length = 0;
gdjs.CastleCode.GDLadderObjects2.length = 0;
gdjs.CastleCode.GDCastleWallObjects1.length = 0;
gdjs.CastleCode.GDCastleWallObjects2.length = 0;
gdjs.CastleCode.GDFloorObjects1.length = 0;
gdjs.CastleCode.GDFloorObjects2.length = 0;
gdjs.CastleCode.GDgoatObjects1.length = 0;
gdjs.CastleCode.GDgoatObjects2.length = 0;

gdjs.CastleCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['CastleCode'] = gdjs.CastleCode;
