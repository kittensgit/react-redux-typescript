import { useDispatch } from "react-redux"
import * as UserActionCreators from '../store/action-creators/user'
import { bindActionCreators } from "redux"


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}