#### Normal (default 300\*200)

```js
initialState = { value: 'hello' }
;<div>
  <Textarea
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
  />
</div>
```

#### Work with Label

```js
initialState = { value: 'hello' }
;<div>
  <label htmlFor="test" />
  <Textarea
    id="test"
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
  />
</div>
```

#### Set width & height

```js
initialState = { value: 'hello' }
;<div>
  <Textarea
    width={500}
    height={100}
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
  />
</div>
```
