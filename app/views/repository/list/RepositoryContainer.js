import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepositories } from '../../../store/actions/repositoryActions';
import { RepositoryList } from './RepositoryList';

const mapStateToProps = (state) => ({
  repositories: state.repository.list,
  loading: state.repository.loading,
  errorMessage: state.repository.errorMessage,
});

const ActionCreators = { getRepositories };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
