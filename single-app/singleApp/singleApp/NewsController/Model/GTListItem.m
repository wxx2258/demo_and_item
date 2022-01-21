//
//  GTListItem.m
//  singleApp
//
//  Created by xiaoxin.wu on 2021/12/6.
//

#import "GTListItem.h"

@implementation GTListItem

# pragma  mark - NSSecureCoding
- (nullable instancetype)initWithCoder:(NSCoder *)coder{
    self = [super init];
    if (self) {
        self.category = [coder decodeObjectForKey:@"category"];
        self.picUrl = [coder decodeObjectForKey:@"thumbnail_pic_s"];
        self.uniqueKey = [coder decodeObjectForKey:@"uniquekey"];
        self.title = [coder decodeObjectForKey:@"title"];
        self.date = [coder decodeObjectForKey:@"date"];
        self.authorName = [coder decodeObjectForKey:@"author_name"];
        self.articleUrl = [coder decodeObjectForKey:@"url"];
    }

    return self;
}

- (void)encodeWithCoder:(NSCoder *)coder {
    [coder encodeObject:self.category forKey:@"category"];
    [coder encodeObject:self.picUrl forKey:@"thumbnail_pic_s"];
    [coder encodeObject:self.uniqueKey forKey:@"uniquekey"];
    [coder encodeObject:self.title forKey:@"title"];
    [coder encodeObject:self.date forKey:@"date"];
    [coder encodeObject:self.authorName forKey:@"author_name"];
    [coder encodeObject:self.articleUrl forKey:@"url"];
}

+ (BOOL)supportsSecureCoding {
    return YES;
}


# pragma  mark - publicMethod
- (void)configWithDictionary:(NSDictionary *)dictionary{

#warning 类型是否匹配
    self.category = [dictionary objectForKey:@"category"];
    self.picUrl = [dictionary objectForKey:@"thumbnail_pic_s"];
    self.uniqueKey = [dictionary objectForKey:@"uniquekey"];
    self.title = [dictionary objectForKey:@"title"];
    self.date = [dictionary objectForKey:@"date"];
    self.authorName = [dictionary objectForKey:@"author_name"];
    self.articleUrl = [dictionary objectForKey:@"url"];
}
@end
