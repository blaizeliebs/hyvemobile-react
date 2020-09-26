import { combineEpics } from 'redux-observable'
// import { getJobsEpic } from './jobs'

const rootEpic = combineEpics(
    // getJobsEpic,
)

export {
    rootEpic,
}
