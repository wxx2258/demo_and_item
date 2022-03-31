//
//  GTVideoCoverVIew.m
//  singleApp
//
//  Created by xiaoxin.wu on 2022/2/2.
//

#import "GTVideoCoverView.h"
#import "GTVideoPlayer.h"
#import "GTVideoToolBar.h"

@interface GTVideoCoverView()

@property(nonatomic, strong, readwrite) UIImageView *coverView;
@property(nonatomic, strong, readwrite) UIImageView *playButton;
@property(nonatomic, copy, readwrite) NSString *videoUrl;
@property(nonatomic, copy, readwrite) GTVideoToolBar *toolBar;

@end

@implementation GTVideoCoverView

- (instancetype) initWithFrame:(CGRect)frame {
    self = [super initWithFrame:frame];
    if (self) {
        [self addSubview:({
            _coverView = [[UIImageView alloc] initWithFrame:CGRectMake(0,0,frame.size.width,frame.size.height - GTVideoToolbarHeight)];
            _coverView;
        })];
        [_coverView addSubview:({
            _playButton = [[UIImageView alloc] initWithFrame:CGRectMake((frame.size.width - 50) / 2, (frame.size.height - GTVideoToolbarHeight - 50) / 2,50,50)];
            _playButton;
        })];
        
        [self addSubview:({
            _toolBar = [[GTVideoToolBar alloc] initWithFrame:CGRectMake(0, _coverView.bounds.size.height, frame.size.width, GTVideoToolbarHeight)];
            _toolBar;
        })]; 
        
        UITapGestureRecognizer *tapGesture = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(_tapToPlay)];
        [self addGestureRecognizer:tapGesture];
        
    }
    return self;
}

- (void) dealloc {

}

- (void)_tapToPlay {
    [[GTVideoPlayer Player] playVideoWithUrl:_videoUrl attachView:_coverView];
}

#pragma mark - public
- (void)layoutWithVideoCoverUrl:(NSString *)videoCoverUrl videoUrl:(NSString *)videoUrl {
    _coverView.image = [UIImage imageNamed:videoCoverUrl];
    _playButton.image = [UIImage imageNamed:@"icon.bundle/video_play@3x.png"];
    _videoUrl = videoUrl;
    
    [_toolBar layoutWithModel:nil];
}



@end
