import { takeEvery, put } from 'redux-saga/effects'

function* workerSaga() {
  yield put({ type: 'ACTION_FROM_WORKER' })
}

// Watcher saga
function* rootSaga() {
  yield takeEvery('HELLO', workerSaga)
}

export default rootSaga