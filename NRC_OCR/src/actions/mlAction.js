import mlActionType from './ActionType/mlActionType';
const { STORE_CROP_IMAGE_DATA, STORE_UNCROP_IMAGE_DATA,GET_CROP_IMAGE,CLEAR_DATA, CONTROL_FLAG,STORE_FORM_DATA,UPDATE_FORM_DATA,FETCH_FORM_DATA}=mlActionType;

function getCropImage(Crop_Image){
    return{
        type: STORE_CROP_IMAGE_DATA,   
        Crop_Image
    }
}
function getUnCropImage(Uncrop_Image){
    return{
        type:STORE_UNCROP_IMAGE_DATA,  
        Uncrop_Image     
    }
}
function getImage(){
    return{
        type:GET_CROP_IMAGE,
    }
}
function clearImage(){
    return{
        type:CLEAR_DATA,
    }
}
function controlFlag(Flag){
    return{
        type:CONTROL_FLAG,
        Flag
    }
}
function storeFormData(FormData){
    return{
        type:STORE_FORM_DATA,
        FormData
    }
}
function storeUpdatedFormData(UpdatedFormData){
    return{
        type:UPDATE_FORM_DATA,
        UpdatedFormData
    }
}
const mlAction={
    getCropImage,getUnCropImage,getImage,clearImage,controlFlag,storeFormData,storeUpdatedFormData
}
export default mlAction;