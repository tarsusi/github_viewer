import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIssues } from '@store/actions/issueActions';
import { IssueList } from './IssueList';

const mapStateToProps = (state) => ({
  issues: state.issue.list,
  loading: state.issue.loading,
  errorMessage: state.issue.errorMessage,
});

const ActionCreators = { getIssues };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
