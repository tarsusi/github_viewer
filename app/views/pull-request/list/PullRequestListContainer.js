import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPullRequests } from '@store/actions/pullRequestActions';
import { PullRequestList } from './PullRequestList';

const mapStateToProps = (state) => ({
  pullRequests: state.pullRequest.list,
  loading: state.pullRequest.loading,
  errorMessage: state.pullRequest.errorMessage,
});

const ActionCreators = { getPullRequests };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);
