import { OdFolderChildren } from "../types";
import { ChildName } from "./FileListing";
import siteConfig from "../config/site.config";
import Image from "./Image";
import { setBrokenThumbnail } from "../redux/features/GridItemSlice";
import { useAppDispatch, useAppSelector, RootState } from "../redux/store";

const GridItem = ({ c }: { c: OdFolderChildren, path: string }) => {
  const dispatch = useAppDispatch();
  const brokenThumbnail = useAppSelector((state:RootState) => state.gridItem.brokenThumbnail);
// console.log(c)
  return (
    <div className="text-black dark:text-white p-4">
        {c.thumbnailUrl && !brokenThumbnail ? (
          <div className="relative h-40 md:h-48 flex items-center justify-center">
            <Image
              className="mx-auto h-full w-full object-contain object-center rounded-lg"
              src={c.thumbnailUrl}
              alt={c.name}
              onError={() => dispatch(setBrokenThumbnail(true))}
            />
          </div>
        ) : (
          <div className="relative h-40 md:h-48 flex items-center justify-center">
            <div className="font-bold text-center">
            <Image
              className="mx-auto object-contain object-center"
              src={`${siteConfig.noimage}`}
              alt={c.name}
              width={150}
              height={150}
            />
            <p>Image Not Found</p>
            </div>
          </div>
        )}
      <div className="flex text-center justify-center mt-2">
        <div className="truncate w-36 md:w-40 lg:w-44 xl:w-52">
          <ChildName 
            name={c.name.replaceAll('-', ' ').replaceAll('_', ' ')}
            folder={Boolean(c.folder)}
          />
        </div>
      </div>
    </div>
  )
}

export default GridItem;
