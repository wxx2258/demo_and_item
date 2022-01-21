//
//  GTListLoader.h
//  singleApp
//
//  Created by xiaoxin.wu on 2021/12/2.
//

#import <Foundation/Foundation.h>

@class  GTListItem;

NS_ASSUME_NONNULL_BEGIN

typedef void(^GTListLoaderFinishBlock)(BOOL success, NSArray<GTListItem *> *dataArray);

/**
 列表请求
 */
@interface GTListLoader : NSObject

- (void)loadListDataWithFinishBlock:(GTListLoaderFinishBlock)finishBlock;
@end

NS_ASSUME_NONNULL_END
