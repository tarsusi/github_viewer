import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepositoryDetails } from '@store/actions/repositoryActions';
import { RepositoryDetails } from './RepositoryDetails';

const mapStateToProps = (state) => ({
  details: state.repository.details,
  loading: state.repository.loading,
  errorMessage: state.repository.errorMessage,
});

const ActionCreators = { getRepositoryDetails };

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryDetails);
