export const START_FETCHING = 'START_FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const START_POSTING = 'START_POSTING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

const initialState = {
  isFetching: false,
  messages: [],
  error: '',
  isPosting: false,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      console.log('Fetching...');
      return {
        isFetching: true,
        messages: [],
        error: '',
      };
    case FETCHING_SUCCESS:
      console.log('Success!');
      return {
        isFetching: false,
        messages: action.payload,
        error: '',
      };
    case FETCHING_FAILURE:
      console.log('Failed :(');
      return {
        isFetching: false,
        messages: [],
        error: action.payload,
      };
    case START_POSTING:
      console.log('Posting...');
      return {
        isFetching: false,
        isPosting: true,
        messages: [],
        error: '',
      };
    case POST_SUCCESS:
      console.log('Post success');
      return {
        isFetching: false,
        isPosting: false,
        messages: [...state.messages, action.payload],
        error: '',
      };
    case POST_FAILURE:
      console.log('Post failed');
      return {
        isFetching: false,
        isPosting: false,
        messages: [...state.messages],
        error: action.payload,
      };
    default:
      return state;
  }
};
