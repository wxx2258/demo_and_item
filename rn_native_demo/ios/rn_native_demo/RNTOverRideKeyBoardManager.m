//
//  RNTOverRideKeyBoardManager.m
//  rn_native_demo
//
//  Created by xiaoxin.wu on 2021/12/30.
//

#import "RNTOverRideKeyBoardManager.h"



@implementation RNTOverRideKeyBoardManager

RCT_EXPORT_MODULE(RNTOverRideKeyBoard)

- (UIView *)view
{
  NSArray *windows = [UIApplication sharedApplication].windows;
  UIWindow *window = [windows lastObject];
  CGRect viewRect = CGRectMake(600, 100, 100, 100);
  UIView* myView2 = [[UIView alloc] initWithFrame:viewRect];
  myView2.backgroundColor = [UIColor redColor];
  [window addSubview:myView2];
  return myView2;
}

@end
