//
//  RNTEditorManager.m
//  rn_native_demo
//
//  Created by xiaoxin.wu on 2021/12/30.
//

#import "RNTEditorManager.h"



@implementation RNTEditorManager

RCT_EXPORT_MODULE(RNTEditor)

- (UIView *)view
{
  UIView* myView = [[UIView alloc] init];
  UITextField *textField = [[UITextField alloc]initWithFrame:CGRectMake(0, 0, 200, 50)];
  textField.text = @"点击试试";
  textField.textColor = [UIColor redColor];
  textField.textAlignment = NSTextAlignmentRight;
  textField.font = [UIFont fontWithName:@"wawati sc" size:20];

  [myView addSubview:textField];
  
  NSArray *windows = [UIApplication sharedApplication].windows;
  UIWindow *window = [windows lastObject];
  CGRect viewRect = CGRectMake(600, 100, 100, 100);
  UIView* myView2 = [[UIView alloc] initWithFrame:viewRect];
  myView2.backgroundColor = [UIColor redColor];
  [window addSubview:myView2];
  [myView addSubview:myView2];
  return myView;
}

@end
