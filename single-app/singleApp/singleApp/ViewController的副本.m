//
//  ViewController.m
//  singleApp
//
//  Created by xiaoxin.wu on 2021/11/5.
//

#import "ViewController.h"

@interface ViewController ()

@end

@interface TestView : UIView

@end

@implementation TestView
- (instancetype)init {
    self = [super init];
    if (self) {
        
    }
    return  self;
}

- (void)willMoveToSuperview:(nullable UIView *)newSuperview {
    [super willMoveToSuperview:newSuperview];
}
- (void)didMoveToSuperview{
    [super didMoveToSuperview];
}
- (void)willMoveToWindow:(nullable UIWindow *)newWindow{
    [super willMoveToWindow:newWindow];
}
- (void)didMoveToWindow{
    [super didMoveToWindow];
}
@end

@implementation ViewController

-(void) viewDidLoad {
    [super viewDidLoad];
//    [self.view addSubview:({
//        UILabel *label = [[UILabel alloc] init];
//        label.text = @"hello world";
//        [label sizeToFit];
//        label.center = CGPointMake(self.view.frame.size.width / 2, self.view.frame.size.height / 2);
//        label;
//    })];
    
//    UIView *view = [[UIView alloc] init];
//    view.backgroundColor = [UIColor redColor];
//    view.frame = CGRectMake(100, 100, 100, 100);
//    [self.view addSubview:view];
    
    TestView *view2 = [[TestView alloc] init];
    view2.backgroundColor = [UIColor greenColor];
    view2.frame = CGRectMake(150, 150, 100, 100);
    [self.view addSubview:view2];
}

@end
