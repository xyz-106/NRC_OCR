
import mlActionType from '../actions/ActionType/mlActionType';

const {FETCH_FORM_DATA,STORE_CROP_IMAGE_DATA,STORE_UNCROP_IMAGE_DATA,CLEAR_DATA,CONTROL_FLAG,STORE_FORM_DATA,UPDATE_FORM_DATA,GET_CROP_IMAGE}=mlActionType;

let initState={
    Uncrop_Image:'',
    Crop_Image:'',
    Flag:false,
    FormData:'',
    UpdatedFormData:[]
}
const mlReducer=(state=initState,action)=>{
    switch(action.type){
        case STORE_UNCROP_IMAGE_DATA:
            return{
              ...state, Uncrop_Image: action.Uncrop_Image
            }
        case STORE_CROP_IMAGE_DATA:
            return{
               ...state, Crop_Image: action.Crop_Image
            }
        case FETCH_FORM_DATA:
            return{

            }
        case CLEAR_DATA:
            return{
                Uncrop_Image:''
            }
        case CONTROL_FLAG:
            return{
                ...state,Flag:true
            }
        case STORE_FORM_DATA:
            return{
                ...state,FormData:action.FormData
            }
        case UPDATE_FORM_DATA:
            return{
               ...state, UpdatedFormData:action.UpdatedFormData
            }
        default:
            return state
    }
}
export default mlReducer;