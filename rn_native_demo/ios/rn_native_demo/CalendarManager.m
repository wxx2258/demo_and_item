//
//  CalendarManager.m
//  rn_native_demo
//
//  Created by xiaoxin.wu on 2021/12/11.
//

// CalendarManager.m
#import "CalendarManager.h"


@implementation CalendarManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = details[@"location"];
//  NSDate *time = details[@"time"];
//  NSString *strData = [[NSString alloc]initWithData:time encoding:NSUTF8StringEncoding];

  NSLog(@"Pretending to create an event %@ at %@", name, location);
}

@end

