import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearPullRequests, getPullRequests } from '@store/actions/pullRequestActions';
import { PullRequestList } from './PullRequestList';

const mapStateToProps = (state) => ({
  pullRequests: state.pullRequest.list,
  loading: state.pullRequest.loading,
  isFinished: state.pullRequest.isFinished,
  errorMessage: state.pullRequest.errorMessage,
});

const ActionCreators = { clearPullRequests, getPullRequests };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);
