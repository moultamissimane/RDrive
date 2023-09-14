import type { OdFolderChildren } from '../types'
import FolderGridBox from './FolderGridBox'
import isHiddenFolder from '../utils/isHiddenFolder'
import React from 'react'

const FolderGridLayout = ({ path, folderChildren }) => {

  // track number of hidden folders
  let hiddenFolders = 0
  const showFolder = (c: OdFolderChildren, index: number) => {
    if (isHiddenFolder(c)) {
      hiddenFolders++
    }
// console.log(c)
    return (
      <FolderGridBox
        key={c.id + index}
        child={c}
        path={path}
      />
    )
  }

  return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {folderChildren.map(showFolder)}
    </div>
  )
}

export default FolderGridLayout

