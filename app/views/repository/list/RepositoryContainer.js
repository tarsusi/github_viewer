import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearRepositories, getRepositories } from '@store/actions/repositoryActions';
import { RepositoryList } from './RepositoryList';

const mapStateToProps = (state) => ({
  repositories: state.repository.list,
  loading: state.repository.loading,
  isFinished: state.repository.isFinished,
  errorMessage: state.repository.errorMessage,
});

const ActionCreators = { clearRepositories, getRepositories };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
