gdjs.WinCode = {};
gdjs.WinCode.GDPlayerObjects1= [];
gdjs.WinCode.GDPlayerObjects2= [];
gdjs.WinCode.GDLavaObjects1= [];
gdjs.WinCode.GDLavaObjects2= [];
gdjs.WinCode.GDWaterObjects1= [];
gdjs.WinCode.GDWaterObjects2= [];
gdjs.WinCode.GDLadderObjects1= [];
gdjs.WinCode.GDLadderObjects2= [];
gdjs.WinCode.GDMessageObjects1= [];
gdjs.WinCode.GDMessageObjects2= [];
gdjs.WinCode.GDReplayObjects1= [];
gdjs.WinCode.GDReplayObjects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};
gdjs.WinCode.conditionTrue_1 = {val:false};
gdjs.WinCode.condition0IsTrue_1 = {val:false};
gdjs.WinCode.condition1IsTrue_1 = {val:false};
gdjs.WinCode.condition2IsTrue_1 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDReplayObjects1Objects = Hashtable.newFrom({"Replay": gdjs.WinCode.GDReplayObjects1});gdjs.WinCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.WinCode.GDReplayObjects1.createFrom(runtimeScene.getObjects("Replay"));

gdjs.WinCode.condition0IsTrue_0.val = false;
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition0IsTrue_0;
gdjs.WinCode.condition0IsTrue_1.val = false;
gdjs.WinCode.condition1IsTrue_1.val = false;
{
gdjs.WinCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDReplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_1.val ) {
{
gdjs.WinCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.WinCode.conditionTrue_1.val = true && gdjs.WinCode.condition0IsTrue_1.val && gdjs.WinCode.condition1IsTrue_1.val;
}
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


}; //End of gdjs.WinCode.eventsList0xb0b28


gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.WinCode.GDPlayerObjects1.length = 0;
gdjs.WinCode.GDPlayerObjects2.length = 0;
gdjs.WinCode.GDLavaObjects1.length = 0;
gdjs.WinCode.GDLavaObjects2.length = 0;
gdjs.WinCode.GDWaterObjects1.length = 0;
gdjs.WinCode.GDWaterObjects2.length = 0;
gdjs.WinCode.GDLadderObjects1.length = 0;
gdjs.WinCode.GDLadderObjects2.length = 0;
gdjs.WinCode.GDMessageObjects1.length = 0;
gdjs.WinCode.GDMessageObjects2.length = 0;
gdjs.WinCode.GDReplayObjects1.length = 0;
gdjs.WinCode.GDReplayObjects2.length = 0;

gdjs.WinCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['WinCode'] = gdjs.WinCode;
