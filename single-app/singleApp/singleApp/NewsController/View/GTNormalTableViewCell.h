//
//  GTNormalTableViewCell.h
//  singleApp
//
//  Created by xiaoxin.wu on 2021/11/21.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@class GTListItem;


@protocol GTNormalTableViewCellDelegate <NSObject>
/*
 *点击删除按钮
 */
- (void)tableViewCell:(UITableViewCell *)tableViewCell clickDeleteButton:(UIButton *)deleteButton;
@end

/**
 * 新闻列表cell
 */
@interface GTNormalTableViewCell : UITableViewCell
 
@property(nonatomic, strong, readwrite) id<GTNormalTableViewCellDelegate> delegate;

- (void)layoutTableViewCellWithItem:(GTListItem *)item;

@end

NS_ASSUME_NONNULL_END
