//
//  RNTMapView.h
//  rn_native_demo
//
//  Created by xiaoxin.wu on 2021/12/17.
//


#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end
