//
//  ViewController.m
//  singleApp
//
//  Created by xiaoxin.wu on 2021/11/5.
//

#import "GTNewsViewController.h"
#import "GTNormalTableViewCell.h"
#import "GTDetailViewController.h"
#import "GTDeleteCellView.h"
#import "GTListLoader.h"

@interface GTNewsViewController ()<UITableViewDataSource, UITableViewDelegate, GTNormalTableViewCellDelegate>

@property(nonatomic, strong,readwrite) UITableView *tableView;
@property(nonatomic, strong, readwrite) NSMutableArray *dataArray;
@property(nonatomic, strong, readwrite) GTListLoader *ListLoader;

@end

@implementation GTNewsViewController 
- (instancetype)init {
    self = [super init];
    if (self) {
        _dataArray = @[].mutableCopy;
        for (int i = 0; i<20; i++) {
            [_dataArray addObject:@(i)];
        }
    }
    return  self;
}
#pragma mark - lifecycle

- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
}
- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
}
- (void)viewWillDisappear:(BOOL)animated{
    [super viewWillDisappear:animated];
}
- (void)viewDidDisappear:(BOOL)animated{
    [super viewWillDisappear:animated];
}

-(void) viewDidLoad {
    [super viewDidLoad];
    
    _tableView = [[UITableView alloc] initWithFrame:self.view.bounds];
    
    _tableView.dataSource = self;
    
    // 设置UITableViewDelegate
    _tableView.delegate = self;
    
    [self.view addSubview:_tableView];
    
    // 添加listloader
    self.ListLoader = [[GTListLoader alloc] init];
    [self.ListLoader loadListData];
}

#pragma mark - UItableViewDelegate

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return _dataArray.count;
}

// Row display. Implementers should *always* try to reuse cells by setting each cell's reuseIdentifier and querying for available reusable cells with dequeueReusableCellWithIdentifier:
// Cell gets various attributes set automatically based on table (separators) and data source (accessory views, editing controls)

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    // 优化，尝试从回收池复用获取cell
    GTNormalTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"id"];
    
    if (!cell) {
        cell = [[GTNormalTableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:@"id"];
        cell.delegate = self;
    }
    
    [cell layoutTableViewCell];
    
//    UITableViewCell *cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:@"id"];
//    cell.textLabel.text = [NSString stringWithFormat:@"main title - %@", @(indexPath.row)];
//    cell.detailTextLabel.text = @"another title";
//    cell.imageView.image = [UIImage imageNamed:@"icon.bundle/video@2x.png"];

    return cell;
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 100;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    GTDetailViewController *controller = [[GTDetailViewController alloc] init];
    controller.title = [NSString stringWithFormat:@"%@", @(indexPath.row)];
    [self.navigationController pushViewController:controller animated:YES];
}

- (void) scrollViewDidScroll:(UIScrollView *)scrollView {
    
}

// 实现一个GTNormalTableViewCellDelegate delegate的一个方法，可以在 GTNormalTableViewCell 调用该方法。
- (void)tableViewCell:(UITableViewCell *)tableViewCell clickDeleteButton:(UIButton *)deleteButton {
    // 显示弹窗
    GTDeleteCellView *deleteView = [[GTDeleteCellView alloc] initWithFrame:self.view.bounds];
    
    // 转换deleteButton的坐标系到window对应的坐标系
    CGRect rect = [tableViewCell convertRect:deleteButton.frame toView:nil];
    
    // 处理block循环引用的问题
    __weak typeof(self) wself = self;
    // 传递一个函数下去，底下的 Controller 自行决定如何处理
    [deleteView showDeleteViewFromPoint:rect.origin clickBlock:^{
        __strong typeof(self)strongSelf = wself;
        [strongSelf.dataArray removeLastObject];
        [self.tableView deleteRowsAtIndexPaths:@[[strongSelf.tableView indexPathForCell:tableViewCell]] withRowAnimation:UITableViewRowAnimationAutomatic];
    }];
}


@end
