//
//  GTSplashView.m
//  singleApp
//
//  Created by xiaoxin.wu on 2022/2/6.
//

#import "GTSplashView.h"
#import "GTScreen.h"

@interface GTSplashView()

@property(nonatomic, strong, readwrite)UIButton *button;

@end

@implementation GTSplashView

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

-(instancetype) initWithFrame:(CGRect)frame {
    self = [super initWithFrame:frame];
    
    if (self) {
        self.image = [UIImage imageNamed:@"LanuchImg"];
        [self addSubview:({
            _button = [[UIButton alloc] initWithFrame:UIRect(330, 100, 60, 40)];
            _button.backgroundColor = [UIColor lightGrayColor];
            [_button setTitle:@"跳过" forState:UIControlStateNormal];
            [_button addTarget:self action:@selector(_removeSplashView) forControlEvents:UIControlEventTouchUpInside];
            _button;
        })];
        self.userInteractionEnabled = YES;
    }
    return self;
}

#pragma mark -
-(void) _removeSplashView {
    [self removeFromSuperview];
}

@end
