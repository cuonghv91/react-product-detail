import * as React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'blue'
  }
})

export interface ReactProductDetailProps {
  position?: string
}

export const ReactProductDetail: React.FC<ReactProductDetailProps> = ({
  position = 'bottom'
}) => {
  console.log(position)
  return <h1 className={css(styles.title)}>Hello Aphsdsdrodite!</h1>
}
