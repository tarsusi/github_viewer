import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearIssues, getIssues } from '@store/actions/issueActions';
import { IssueList } from './IssueList';

const mapStateToProps = (state) => ({
  issues: state.issue.list,
  loading: state.issue.loading,
  isFinished: state.issue.isFinished,
  errorMessage: state.issue.errorMessage,
});

const ActionCreators = { clearIssues, getIssues };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
