# reactivity

This function can manually clear errors in the form.

## **Type**

```ts
export type UseFormClearErrors = (
  name?: string | string[]
) => void
```

## **Props**

| Type        |      Description     |  Example |
| ------------- | :-----------: | ----: |
| `undefined`      | Remove all errors. | 	`clearErrors()` |
| `string`     |  	Remove single error.   |   `clearErrors("yourDetails.firstName")` |
| `string[]` |   Remove multiple errors.    |   `clearErrors(["yourDetails.lastName"])` |


## **Usage**

```ts
register('test.firstName', { required: true })
register('test.lastName', { required: true })
clearErrors('test') // will clear both errors from test.firstName and test.lastName
clearErrors('test.firstName') // for clear single input error
```

try it on [playground](https://mini-anything-play.netlify.app/#eNqVUstu2zAQ/JWFLpIBS+rZkIMURYL2nGPVAy2tbbbio3y4NQz9e5ekFMuJe8iN3OXODGf2knGhlXGlYLr6aZXMNtmllQDt1LBttoFYCbWTx9JbLPfKiNBos6Nz2m7qetkp9cDOlUQ38P25YlrfdImmzdYLxA8CVcZLxwVWaEW5M+qPRfMOs6biCU1pUPZo0HyE483oO55AM7ZyzNbZZ60rAiPTGtsZrh1YdF4/tDK5BxfoDDKHT8Yo85XJfkCznmovfie4ey2SoGfSAyPsjRKQL0XmrWxlp6QNiIHf4IFbF8bCLTx5cQRJUQEGKgtjtIPbp7/08JuMAmysHSNjYo8F0hzb8dINyEx6TX+E7ayriEsgVE8kuZJfCOWApGtcXbUpmVBp6s4Xi6Jnjq1g+5AWilHNFblNI9Z3HVqbE9wtZNTyirg0sijSX/8HuWd8wH5GbOoUEYXTOBQUu0M6A1yunlGsAE2wEx4TSKUNnlC6LW3Pwrdi/up6VrgqVm0W8QAkE+RSw6X2DjY0OsdV5KFVBR++f/pRndjgMV9TaAZ/e26w34AzHoH0ZvUE1uy8c0qCO2skqCSLqNKhqVM7Pm7qID0e43WafOwG3v0Ks1PQRejelRL9iFSUcuetU4L0CQqGHa6luZBPW3YBe1R+6J8V9SPD/I9WXl2Z2ZPSpey3Ohc7eNexK+bNtt7ANvUi5Gz8B4xIt04=)

