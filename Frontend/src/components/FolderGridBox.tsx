import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useClipboard } from 'use-clipboard-copy'
import { getBaseUrl } from '../utils/getBaseUrl'
import { useTranslation } from 'next-i18next'
import { getStoredToken } from '../utils/protectedRouteHandler'
import GridItem from './GridItem'
import isHiddenFolder from '../utils/isHiddenFolder'
import { RotatingContainer } from './previews/RotatingContainer'
import { OdFolderChildren } from '../types'
import Hover from './Tooltip/Tooltip';
import { RootState, useAppDispatch, useAppSelector  } from '../redux/store'
import { setCopiedState } from '../redux/features/folderGridBoxSlice'

const FolderGridBox = ({ child, path }: { child: OdFolderChildren; path: string }) => {
  const clipboard = useClipboard()
  // const [id, setId] = useState<string | null>(null);
  const dispatch = useAppDispatch()
  const copiedState = useAppSelector((state: RootState) => state.folderGridBox.copiedState)
  const { t } = useTranslation()
  const hashedToken = getStoredToken(path)
  const getItemPath = (name) => `${path === '/' ? '' : path}/${encodeURIComponent(name)}`

  const handleCopyClick = (text: string, file: OdFolderChildren) => {
    clipboard.copy(text)
    dispatch(setCopiedState({ id: file.id, value: true }))
    setTimeout(() => {
      dispatch(setCopiedState({ id: file.id, value: false }))
    }, 1000)
  }
console.log(child)
  return (
    <RotatingContainer
      className={`group shadow dark:shadow-gray-700 hover:shadow-none relative overflow-hidden rounded-lg transition-all duration-100 bg-gradient-to-b dark:from-[#0D1117] dark:to-black ${
        isHiddenFolder(child) ? 'hidden' : ''
      }`}
    >
      <div className="absolute top-0 right-0 z-10 m-1 rounded-lg border dark:border-gray-700 py-0.5 text-black/70 dark:text-white/70 hover:text-black hover:dark:text-white bg-white dark:bg-black opacity-0 transition-all duration-100 group-hover:opacity-100">
        {child.folder ? (
          <div>
            <span
              className={`cursor-pointer rounded-full px-1.5 py-1.5 ${
                copiedState[child.id] ? 'text-green-500' : ''
              }`}
              onClick={() => {
                handleCopyClick(
                  `${getBaseUrl()}${`${path === '/' ? '' : path}/${encodeURIComponent(child.name)}`}`,
                  child
                )
              }}
            >
              {copiedState[child.id] ? (
                <Hover tipChildren={t('Copied')}>
                  <FontAwesomeIcon icon={['fas', 'check']} className="w-4 h-4" />
                </Hover>
              ) : (
                <FontAwesomeIcon icon={['far', 'copy']} className="w-4 h-4" />
              )}
            </span>
          </div>
        ) : (
          <div>
            <span
              title={t('Copy raw file permalink')}
              className="cursor-pointer rounded-lg px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600 text-black dark:text-white"
              onClick={() => {
                clipboard.copy(
                  `${getBaseUrl()}/api/raw/?path=${getItemPath(child.name)}${
                    hashedToken ? `&odpt=${hashedToken}` : ''
                  }`
                )
              }}
            >
              <FontAwesomeIcon icon={['far', 'copy']} />
            </span>
          </div>
        )}
      </div>
      <Link href={getItemPath(child.name)} passHref >

      <GridItem c={child} path={getItemPath(child.name)} />
    </Link>
    <div>
    </div>
    </RotatingContainer>
  )
}

export default FolderGridBox