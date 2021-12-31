//
//  GTListItem.h
//  singleApp
//
//  Created by xiaoxin.wu on 2021/12/6.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface GTListItem : NSObject

@property(nonatomic,copy,readwrite) NSString *category;
@property(nonatomic,copy,readwrite) NSString *picUrl;
@property(nonatomic,copy,readwrite) NSString *uniqueKey;
@property(nonatomic,copy,readwrite) NSString *title;
@property(nonatomic,copy,readwrite) NSString *date;
@property(nonatomic,copy,readwrite) NSString *authorName;
@property(nonatomic,copy,readwrite) NSString *articleUrl;

- (void)configWithDictionary:(NSDictionary *)dictionary;


@end

NS_ASSUME_NONNULL_END
