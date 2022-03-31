//
//  GTDetailViewController.h
//  singleApp
//
//  Created by xiaoxin.wu on 2021/11/26.
//

#import "GTNewsViewController.h"
#import "GTMediator.h"

NS_ASSUME_NONNULL_BEGIN

@interface GTDetailViewController : GTNewsViewController
-(instancetype)initWithUrlString:(NSString *)urlString;
@end

NS_ASSUME_NONNULL_END
