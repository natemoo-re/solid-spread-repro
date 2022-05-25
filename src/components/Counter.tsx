import { createMutable } from 'solid-js/store';

function SpreadComp(props) {
  return (
    <div data-test-xyz={props.foo}>
      <div>this should say bar: {props.bar}</div>
      <div>this should say baz: {props.baz}</div>
    </div>
  );
}

export default function Counter() {
  const state = createMutable({
    spreadProps: {
      foo: 'foo',
      bar: 'bar',
    },
  });
  return <SpreadComp {...state.spreadProps} baz={'baz'} />;
}
