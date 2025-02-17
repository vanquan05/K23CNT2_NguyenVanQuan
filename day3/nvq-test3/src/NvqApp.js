import NvqFuncComp from './components/NvqFuncComp';
import NvqJsxExpression from './NvqJsxExpression';

function NvqApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS lesson3 - Nguyen Van Quan</h1>

      <NvqJsxExpression />

      <hr/>
      {/* sung dung function component */}
      <NvqFuncComp />
      {/*sung dung class component */}
      <NvqFuncComp></NvqFuncComp>

    </div>
  );
}

export default NvqApp;
