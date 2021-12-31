//
//  GTListLoader.h
//  singleApp
//
//  Created by xiaoxin.wu on 2021/12/2.
//

#import <Foundation/Foundation.h>

@class  GTListItem;

typedef void(^GTListLoaderFinishBlock)(BOOL success, NSArray<GTListItem *> *dataArray);

NS_ASSUME_NONNULL_BEGIN
/**
 列表请求
 */
@interface GTListLoader : NSObject

- (void)loadListData;
@end

NS_ASSUME_NONNULL_END
