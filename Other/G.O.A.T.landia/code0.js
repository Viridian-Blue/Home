gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDPlayerObjects1= [];
gdjs.TitleScreenCode.GDPlayerObjects2= [];
gdjs.TitleScreenCode.GDLavaObjects1= [];
gdjs.TitleScreenCode.GDLavaObjects2= [];
gdjs.TitleScreenCode.GDWaterObjects1= [];
gdjs.TitleScreenCode.GDWaterObjects2= [];
gdjs.TitleScreenCode.GDLadderObjects1= [];
gdjs.TitleScreenCode.GDLadderObjects2= [];
gdjs.TitleScreenCode.GDTitleBgObjects1= [];
gdjs.TitleScreenCode.GDTitleBgObjects2= [];
gdjs.TitleScreenCode.GDPlayButtonObjects1= [];
gdjs.TitleScreenCode.GDPlayButtonObjects2= [];
gdjs.TitleScreenCode.GDGameNameObjects1= [];
gdjs.TitleScreenCode.GDGameNameObjects2= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_0 = {val:false};


gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.TitleScreenCode.GDPlayButtonObjects1});gdjs.TitleScreenCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.TitleScreenCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV1", false);
}}

}


}; //End of gdjs.TitleScreenCode.eventsList0xb0b28


gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.TitleScreenCode.GDPlayerObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayerObjects2.length = 0;
gdjs.TitleScreenCode.GDLavaObjects1.length = 0;
gdjs.TitleScreenCode.GDLavaObjects2.length = 0;
gdjs.TitleScreenCode.GDWaterObjects1.length = 0;
gdjs.TitleScreenCode.GDWaterObjects2.length = 0;
gdjs.TitleScreenCode.GDLadderObjects1.length = 0;
gdjs.TitleScreenCode.GDLadderObjects2.length = 0;
gdjs.TitleScreenCode.GDTitleBgObjects1.length = 0;
gdjs.TitleScreenCode.GDTitleBgObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDGameNameObjects1.length = 0;
gdjs.TitleScreenCode.GDGameNameObjects2.length = 0;

gdjs.TitleScreenCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
