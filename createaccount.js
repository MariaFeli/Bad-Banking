function CreateAccount(){
  const ctx = React.useContext(UserContext);    
  return (
    <h1>Create Account</h1>
      {JSON.stringify(ctx)}
  );
}
