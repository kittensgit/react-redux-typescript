import * as UserActionsCreator from '../action-creators/user';
import * as TodoActionsCreator from '../action-creators/todo';

export default {
    ...UserActionsCreator,
    ...TodoActionsCreator
}