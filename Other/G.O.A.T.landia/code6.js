gdjs.DeathCode = {};
gdjs.DeathCode.GDPlayerObjects1= [];
gdjs.DeathCode.GDPlayerObjects2= [];
gdjs.DeathCode.GDLavaObjects1= [];
gdjs.DeathCode.GDLavaObjects2= [];
gdjs.DeathCode.GDWaterObjects1= [];
gdjs.DeathCode.GDWaterObjects2= [];
gdjs.DeathCode.GDLadderObjects1= [];
gdjs.DeathCode.GDLadderObjects2= [];
gdjs.DeathCode.GDDeathMessageObjects1= [];
gdjs.DeathCode.GDDeathMessageObjects2= [];
gdjs.DeathCode.GDRespawnObjects1= [];
gdjs.DeathCode.GDRespawnObjects2= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};
gdjs.DeathCode.condition2IsTrue_0 = {val:false};
gdjs.DeathCode.conditionTrue_1 = {val:false};
gdjs.DeathCode.condition0IsTrue_1 = {val:false};
gdjs.DeathCode.condition1IsTrue_1 = {val:false};
gdjs.DeathCode.condition2IsTrue_1 = {val:false};


gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDRespawnObjects1Objects = Hashtable.newFrom({"Respawn": gdjs.DeathCode.GDRespawnObjects1});gdjs.DeathCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.DeathCode.GDRespawnObjects1.createFrom(runtimeScene.getObjects("Respawn"));

gdjs.DeathCode.condition0IsTrue_0.val = false;
{
{gdjs.DeathCode.conditionTrue_1 = gdjs.DeathCode.condition0IsTrue_0;
gdjs.DeathCode.condition0IsTrue_1.val = false;
gdjs.DeathCode.condition1IsTrue_1.val = false;
{
gdjs.DeathCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDRespawnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DeathCode.condition0IsTrue_1.val ) {
{
gdjs.DeathCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.DeathCode.conditionTrue_1.val = true && gdjs.DeathCode.condition0IsTrue_1.val && gdjs.DeathCode.condition1IsTrue_1.val;
}
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV1", false);
}}

}


}; //End of gdjs.DeathCode.eventsList0xb0b28


gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.DeathCode.GDPlayerObjects1.length = 0;
gdjs.DeathCode.GDPlayerObjects2.length = 0;
gdjs.DeathCode.GDLavaObjects1.length = 0;
gdjs.DeathCode.GDLavaObjects2.length = 0;
gdjs.DeathCode.GDWaterObjects1.length = 0;
gdjs.DeathCode.GDWaterObjects2.length = 0;
gdjs.DeathCode.GDLadderObjects1.length = 0;
gdjs.DeathCode.GDLadderObjects2.length = 0;
gdjs.DeathCode.GDDeathMessageObjects1.length = 0;
gdjs.DeathCode.GDDeathMessageObjects2.length = 0;
gdjs.DeathCode.GDRespawnObjects1.length = 0;
gdjs.DeathCode.GDRespawnObjects2.length = 0;

gdjs.DeathCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['DeathCode'] = gdjs.DeathCode;
