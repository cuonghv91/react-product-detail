import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export const BackIcon: React.FC = () => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='caret-left'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 192 512'
      width='10px'
    >
      <path
        fill='black'
        d='M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z'
      ></path>
    </svg>
  )
}

export const NextIcon: React.FC = () => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='caret-right'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 192 512'
      width='10px'
    >
      <path
        fill='black'
        d='M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z'
      ></path>
    </svg>
  )
}

const styles = StyleSheet.create({
  emptyBox: {
    padding: 8,
    border: '1px solid red',
    borderRadius: 4,
    boxSizing: 'border-box'
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nav: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.1)',
    cursor: 'pointer'
  },
  imgs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  img: {
    height: '100%',
    boxSizing: 'border-box',
    borderRight: '1px solid rgba(0,0,0,0.1)',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)'
  }
})

export interface UIProps {
  imgList?: string[]
  shownItem?: number
  height?: string
  nextNav?: JSX.Element
  backNav?: JSX.Element
  isNavable?: boolean
}

const UI: React.FC<UIProps> = ({
  imgList,
  shownItem,
  height = '100px',
  backNav = <BackIcon />,
  nextNav = <NextIcon />,
  isNavable = true
}) => {
  if (imgList === undefined || imgList.length === 0) return <></>
  return (
    <div
      className={css(styles.slider)}
      data-testid='slider'
      style={{ height: height }}
    >
      {isNavable && (
        <div
          className={css(styles.nav)}
          data-testid='next-btn'
          className={css(styles.nav)}
          style={{ width: 20 }}
        >
          {backNav}
        </div>
      )}
      <div
        data-testid='img-list'
        className={css(styles.imgs)}
        style={{ width: `calc(100% - ${isNavable ? 40 : 0}px)` }}
      >
        {imgList.map((img: string, index: number) => (
          <div
            data-testid='img'
            key={index}
            className={css(styles.img)}
            style={{
              width: `calc(100% / ${imgList.length})`
            }}
          >
            <div
              style={{
                width: `90%`,
                height: `90%`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundImage: `url(${img})`
              }}
            ></div>
          </div>
        ))}
      </div>
      {isNavable && (
        <div
          className={css(styles.nav)}
          data-testid='back-btn'
          className={css(styles.nav)}
          style={{ width: 20 }}
        >
          {nextNav}
        </div>
      )}
    </div>
  )
}

export default UI
