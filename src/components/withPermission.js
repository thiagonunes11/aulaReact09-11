const withPermission = (WrappedComponent) => {
    return (props) => {
      if (!props.hasPermission) {
        return <h1>Permissão negada</h1>;
      }
      return <WrappedComponent {...props} />;
    };
  };
 
export default withPermission;
 
