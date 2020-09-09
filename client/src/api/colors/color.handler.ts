import { Dispatch } from 'redux';
import endpoint from '@shared/api/color/color.endpoint';
import ColorResult from '@shared/api/color/color.result';
import { ApiHooks } from '@client/api/types';
import ApiHandler from '@client/api/api-handler';
import { colorApiActions } from '@client/redux/colors/actions';

class ColorHandler extends ApiHandler<ColorResult> {
  static create = (dispatch: Dispatch) => new ColorHandler(dispatch);

  private static createHooks = (dispatch: Dispatch): ApiHooks<ColorResult> => ({
    onRequest: () => {
      dispatch(colorApiActions.request());
    },
    onSuccess: (result) => {
      dispatch(colorApiActions.success(result));
    },
    onFailure: (error) => {
      dispatch(colorApiActions.failure(error));
    },
  });

  private constructor(dispatch: Dispatch) {
    super(ColorHandler.createHooks(dispatch));
  }

  getAll = async () => this.baseGet(endpoint.getAllUri());
}

export default ColorHandler;
