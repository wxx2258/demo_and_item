//
//  SceneDelegate.m
//  singleApp
//
//  Created by xiaoxin.wu on 2021/11/5.
//

#import "SceneDelegate.h"
#import "GTNewsViewController.h"
#import "GTVideoContoller.h"
#import "GTRecommendViewController.h"
#import "GTSplashView.h"
#import "GTStatic.h"
#import <GTFramework/GTFramework.h>

@interface SceneDelegate ()<UITabBarControllerDelegate>

@end

@implementation SceneDelegate


- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {
    // Use this method to optionally configure and attach the UIWindow `window` to the provided UIWindowScene `scene`.
    // If using a storyboard, the `window` property will automatically be initialized and attached to the scene.
    // This delegate does not imply the connecting scene or session are new (see `application:configurationForConnectingSceneSession` instead).
    UIWindowScene *windowScene = (UIWindowScene *)scene;
    self.window = [[UIWindow alloc] initWithWindowScene:windowScene];
    self.window.frame = windowScene.coordinateSpace.bounds;
        
    UITabBarController *tabbarController = [[UITabBarController alloc] init];
    
    UIViewController *newsViewController = [[GTNewsViewController alloc] init];
    
//    UIViewController *controller1 = [[UIViewController alloc] init];
//    controller1.view.backgroundColor = [UIColor redColor];
    newsViewController.tabBarItem.title = @"新闻";

    newsViewController.tabBarItem.image = [UIImage imageNamed:@"icon.bundle/page@2x.png"];
    newsViewController.tabBarItem.selectedImage = [UIImage imageNamed:@"icon.bundle/page_selected@2x.png"];

    GTVideoContoller *videoContoller = [[GTVideoContoller alloc] init];

    GTRecommendViewController *recommendController = [[GTRecommendViewController alloc] init];


    UIViewController *mainController = [[UIViewController alloc] init];
    mainController.view.backgroundColor = [UIColor greenColor];
    mainController.tabBarItem.title = @"我的";
    mainController.tabBarItem.image = [UIImage imageNamed:@"icon.bundle/home@2x.png"];
    mainController.tabBarItem.selectedImage = [UIImage imageNamed:@"icon.bundle/home_selected@2x.png"];

    // 将四个页面的 UIViewController 加入到 UITabBarController 之中
    [tabbarController setViewControllers: @[newsViewController,videoContoller, recommendController, mainController]];

    // delegate 说明当前我们需要自定义的事件是在当前类中执行的
    tabbarController.delegate = self;
    
    // 将UInavigation作为最外层试图
    UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:tabbarController];

    self.window.rootViewController = navigationController;
    [self.window makeKeyAndVisible];
    
    [self.window addSubview:({
        GTSplashView *splashView = [[GTSplashView alloc] initWithFrame:self.window.bounds];
        splashView;
    })];

}

- (void)tabBarController:(UITabBarController *)tabBarController didSelectViewController:(UIViewController *)viewController {
    NSLog(@"did select ");
}



- (void)sceneDidDisconnect:(UIScene *)scene {
    // Called as the scene is being released by the system.
    // This occurs shortly after the scene enters the background, or when its session is discarded.
    // Release any resources associated with this scene that can be re-created the next time the scene connects.
    // The scene may re-connect later, as its session was not necessarily discarded (see `application:didDiscardSceneSessions` instead).
}


- (void)sceneDidBecomeActive:(UIScene *)scene {
    // Called when the scene has moved from an inactive state to an active state.
    // Use this method to restart any tasks that were paused (or not yet started) when the scene was inactive.
}


- (void)sceneWillResignActive:(UIScene *)scene {
    // Called when the scene will move from an active state to an inactive state.
    // This may occur due to temporary interruptions (ex. an incoming phone call).
}


- (void)sceneWillEnterForeground:(UIScene *)scene {
    // Called as the scene transitions from the background to the foreground.
    // Use this method to undo the changes made on entering the background.
}


- (void)sceneDidEnterBackground:(UIScene *)scene {
    // Called as the scene transitions from the foreground to the background.
    // Use this method to save data, release shared resources, and store enough scene-specific state information
    // to restore the scene back to its current state.
}


- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts{

    NSLog(@"url");
}



@end
