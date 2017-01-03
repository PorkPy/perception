Search.setIndex({envversion:49,filenames:["api/camera_intrinsics","api/cnn","api/detector","api/features","api/image","api/rgbd_sensor","api/video","index","install/install"],objects:{"perception.AlexNet":{build_alexnet:[1,2,1,""],build_alexnet_weights:[1,2,1,""],close_session:[1,2,1,""],featurize:[1,2,1,""],open_session:[1,2,1,""],predict:[1,2,1,""]},"perception.BagOfFeatures":{add:[3,2,1,""],descriptors:[3,0,1,""],extend:[3,2,1,""],feature:[3,2,1,""],feature_subset:[3,2,1,""],keypoints:[3,0,1,""],normals:[3,0,1,""],reference_frames:[3,0,1,""]},"perception.BinaryImage":{__init__:[4,2,1,""],add_frame:[4,2,1,""],closest_nonzero_pixel:[4,2,1,""],diff_with_target:[4,2,1,""],find_contours:[4,2,1,""],mask_binary:[4,2,1,""],most_free_pixel:[4,2,1,""],open:[4,3,1,""],prune_contours:[4,2,1,""],resize:[4,2,1,""],to_color:[4,2,1,""]},"perception.CNNBatchFeatureExtractor":{close:[3,2,1,""],extract:[3,2,1,""],open:[3,2,1,""]},"perception.CameraIntrinsics":{K:[0,0,1,""],__init__:[0,2,1,""],crop:[0,2,1,""],cx:[0,0,1,""],cy:[0,0,1,""],deproject:[0,2,1,""],deproject_pixel:[0,2,1,""],deproject_to_image:[0,2,1,""],frame:[0,0,1,""],fx:[0,0,1,""],fy:[0,0,1,""],height:[0,0,1,""],load:[0,3,1,""],proj_matrix:[0,0,1,""],project:[0,2,1,""],project_to_image:[0,2,1,""],resize:[0,2,1,""],save:[0,2,1,""],skew:[0,0,1,""],width:[0,0,1,""]},"perception.ColorImage":{__init__:[4,2,1,""],b_data:[4,0,1,""],background_model:[4,2,1,""],draw_box:[4,2,1,""],find_chessboard:[4,2,1,""],foreground_mask:[4,2,1,""],g_data:[4,0,1,""],inpaint:[4,2,1,""],mask_binary:[4,2,1,""],nonzero_hsv_data:[4,2,1,""],open:[4,3,1,""],r_data:[4,0,1,""],resize:[4,2,1,""],segment_kmeans:[4,2,1,""],to_binary:[4,2,1,""],to_grayscale:[4,2,1,""]},"perception.DepthImage":{__init__:[4,2,1,""],gradients:[4,2,1,""],inpaint:[4,2,1,""],mask_binary:[4,2,1,""],open:[4,3,1,""],point_normal_cloud:[4,2,1,""],resize:[4,2,1,""],threshold:[4,2,1,""],threshold_gradients:[4,2,1,""],threshold_gradients_pctile:[4,2,1,""],to_binary:[4,2,1,""],to_color:[4,2,1,""],to_float:[4,2,1,""]},"perception.FeatureExtractor":{extract:[3,2,1,""]},"perception.FeatureMatcher":{get_point_index:[3,3,1,""],match:[3,2,1,""]},"perception.Image":{__getitem__:[4,2,1,""],__init__:[4,2,1,""],apply:[4,2,1,""],center:[4,0,1,""],center_nonzero:[4,2,1,""],channels:[4,0,1,""],copy:[4,2,1,""],crop:[4,2,1,""],data:[4,0,1,""],finite_pixels:[4,2,1,""],focus:[4,2,1,""],frame:[4,0,1,""],height:[4,0,1,""],ij_to_linear:[4,2,1,""],is_same_shape:[4,2,1,""],linear_to_ij:[4,2,1,""],load_data:[4,3,1,""],mask_by_ind:[4,2,1,""],mask_by_linear_ind:[4,2,1,""],median_images:[4,3,1,""],nonzero_data:[4,2,1,""],nonzero_pixels:[4,2,1,""],raw_data:[4,0,1,""],replace_zeros:[4,2,1,""],resize:[4,2,1,""],save:[4,2,1,""],savefig:[4,2,1,""],shape:[4,0,1,""],transform:[4,2,1,""],type:[4,0,1,""],width:[4,0,1,""],zero_pixels:[4,2,1,""]},"perception.IrImage":{__init__:[4,2,1,""],open:[4,3,1,""],resize:[4,2,1,""]},"perception.Kinect2Sensor":{__del__:[5,2,1,""],__init__:[5,2,1,""],color_frame:[5,0,1,""],color_intrinsics:[5,0,1,""],frame:[5,0,1,""],frames:[5,2,1,""],ir_frame:[5,0,1,""],ir_intrinsics:[5,0,1,""],is_running:[5,0,1,""],median_depth_img:[5,2,1,""],start:[5,2,1,""],stop:[5,2,1,""]},"perception.Kinect2SensorFactory":{sensor:[5,3,1,""]},"perception.NormalCloudImage":{__init__:[4,2,1,""],open:[4,3,1,""],resize:[4,2,1,""],to_normal_cloud:[4,2,1,""]},"perception.ObjectRender":{T_obj_camera:[4,0,1,""],__init__:[4,2,1,""]},"perception.PointCloudImage":{__init__:[4,2,1,""],normal_cloud_im:[4,2,1,""],open:[4,3,1,""],resize:[4,2,1,""],to_point_cloud:[4,2,1,""]},"perception.PointToPlaneFeatureMatcher":{match:[3,2,1,""]},"perception.RawDistanceFeatureMatcher":{match:[3,2,1,""]},"perception.RgbdDetector":{detect:[2,2,1,""]},"perception.RgbdForegroundMaskDetector":{detect:[2,2,1,""]},"perception.RgbdForegroundMaskQueryImageDetector":{detect:[2,2,1,""]},"perception.RgbdSensor":{frames:[5,2,1,""],reset:[5,2,1,""],start:[5,2,1,""],stop:[5,2,1,""]},"perception.VideoRecorder":{start:[6,2,1,""],start_recording:[6,2,1,""],stop:[6,2,1,""],stop_recording:[6,2,1,""]},"perception.VirtualKinect2Sensor":{__init__:[5,2,1,""],color_frame:[5,0,1,""],color_intrinsics:[5,0,1,""],frame:[5,0,1,""],frames:[5,2,1,""],ir_frame:[5,0,1,""],ir_intrinsics:[5,0,1,""],is_running:[5,0,1,""],median_depth_img:[5,2,1,""],path_to_images:[5,0,1,""],start:[5,2,1,""],stop:[5,2,1,""]},BagOfFeatures:{features:[3,0,1,""]},CNNBatchFeatureExtractor:{cnn:[3,0,1,""]},Correspondences:{index_map:[3,0,1,""],num_matches:[3,0,1,""],source_points:[3,0,1,""],target_points:[3,0,1,""]},GlobalFeature:{descriptor:[3,0,1,""],key:[3,0,1,""],pose:[3,0,1,""]},LocalFeature:{descriptor:[3,0,1,""],normal:[3,0,1,""],point:[3,0,1,""],reference_frame:[3,0,1,""]},NormalCorrespondences:{index_map:[3,0,1,""],num_matches:[3,0,1,""],source_normals:[3,0,1,""],source_points:[3,0,1,""],target_normals:[3,0,1,""],target_points:[3,0,1,""]},PointToPlaneFeatureMatcher:{dist_thresh:[3,0,1,""],norm_thresh:[3,0,1,""]},RgbdDetection:{binary_im:[2,0,1,""],camera_intr:[2,0,1,""],color_im:[2,0,1,""],cropped_ir_intrinsics:[2,0,1,""],depth_im:[2,0,1,""],depth_im_table:[2,0,1,""],height:[2,0,1,""],point_normal_cloud:[2,0,1,""],query_im:[2,0,1,""],width:[2,0,1,""]},VideoRecorder:{codec:[6,0,1,""],device_id:[6,0,1,""],fps:[6,0,1,""],res:[6,0,1,""]},perception:{AlexNet:[1,1,1,""],BagOfFeatures:[3,1,1,""],BinaryImage:[4,1,1,""],CNNBatchFeatureExtractor:[3,1,1,""],CNNReusableBatchFeatureExtractor:[3,1,1,""],CameraIntrinsics:[0,1,1,""],ColorImage:[4,1,1,""],Correspondences:[3,1,1,""],DepthImage:[4,1,1,""],Feature:[3,1,1,""],FeatureExtractor:[3,1,1,""],FeatureMatcher:[3,1,1,""],GlobalFeature:[3,1,1,""],Image:[4,1,1,""],IrImage:[4,1,1,""],Kinect2Sensor:[5,1,1,""],Kinect2SensorFactory:[5,1,1,""],LocalFeature:[3,1,1,""],MVCNNFeature:[3,1,1,""],NormalCloudImage:[4,1,1,""],NormalCorrespondences:[3,1,1,""],ObjectRender:[4,1,1,""],PointCloudImage:[4,1,1,""],PointToPlaneFeatureMatcher:[3,1,1,""],RawDistanceFeatureMatcher:[3,1,1,""],RenderMode:[4,1,1,""],RgbdDetection:[2,1,1,""],RgbdDetector:[2,1,1,""],RgbdForegroundMaskDetector:[2,1,1,""],RgbdForegroundMaskQueryImageDetector:[2,1,1,""],RgbdSensor:[5,1,1,""],SHOTFeature:[3,1,1,""],VideoRecorder:[6,1,1,""],VirtualKinect2Sensor:[5,1,1,""]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:staticmethod"},terms:{"3x3":0,"abstract":[2,3,4,5],"case":4,"default":6,"float":[0,3,4],"function":[2,4,5],"int":[0,1,2,3,4,5,6],"new":[0,3,4,5],"return":[0,1,2,3,4,5],"static":[0,3,4,5],"true":[0,1,4,5],__del__:5,__getitem__:4,__init__:[0,4,5],_color:5,_ir:5,abov:4,accord:8,actual:5,add:[3,4],add_fram:4,addition:4,again:5,against:4,alia:2,align:3,all:[2,4,5],all_point:3,allow:3,along:4,alreadi:5,altern:[4,8],amount:[0,4],any:[4,8],anywher:8,api:7,appli:4,appropri:8,area:[2,4],area_thresh:4,aren:4,arg:4,argument:4,around:[2,4],arrai:[1,3,4,5],assign:4,assum:4,automat:[4,5,8],avail:[2,5],availabl:4,axi:0,b_data:4,backgroud:4,background:[2,4],background_model:4,backward:2,bag:3,base:[0,1,2,3,4,5],batch:[1,3],batch_siz:1,been:5,befor:8,between:[3,4],betwen:3,bgmodel:4,bicub:4,bilinear:4,bin:4,binari:[2,4],binary_im:[2,4],binary_thumbnail:2,bit:4,black:4,blue:[4,5],bool:[0,1,4,5],both:4,bound:[2,4],boundari:4,bounding_box:2,box:[2,4],broad:7,build:[],build_alexnet:1,build_alexnet_weight:1,call:[4,5],camera:[],camera_intr:[2,4],cameraintrins:[],cameraintrisn:5,can:8,captur:[5,6],center:[0,2,4],center_i:4,center_j:4,center_nonzero:4,cfg:[2,5],chang:8,channel:[1,2,4],check:4,check_channel:4,chessboard:4,choos:3,circular:4,classif:1,classifi:4,clone:[],close:[1,3],close_sess:1,closest:3,closest_nonzero_pixel:4,cloud:[0,2,4],cluster:4,cmap:4,cnn:[2,3],code:8,codec:6,col:0,collect:5,color:[2,4,5],color_:5,color_fram:5,color_im:2,color_intrins:5,color_thumbnail:2,color_to_dept:5,colormap:4,column:4,com:8,comp:2,compar:4,compon:[2,4],comput:4,config:[1,3],configur:[1,5],connect:[1,2,4,5],consecut:5,consid:3,contain:[1,4,5],contour:[2,4],conv5:1,convert:[0,2,4,5],convnet:1,coordin:[0,4],copi:4,core:[0,1,3,4,7,8],corner:4,corr:3,correspond:[0,2],cosin:3,cpu:5,creat:[0,3,4,5],criterion:3,crop:[0,4],crop_ci:0,crop_cj:0,cropped_ir_intrins:2,cubic:4,current:[4,5,8],data:4,databas:3,debug:5,depend:[],deploi:1,deproject:0,deproject_pixel:0,deproject_to_imag:0,depth:[0,2,4,5],depth_:5,depth_im:2,depth_im_t:2,depth_imag:0,depth_mod:5,depth_thumbnail:2,describ:3,descriptor:3,design:7,desir:4,detect:5,detector:2,devic:[5,6],device_id:6,device_num:5,dictionari:5,diff_with_target:4,differ:4,dim:4,dimens:4,dimension:4,direct:4,directli:7,directori:[4,5,8],discov:5,disk:5,dist_thresh:[3,4],distanc:[3,4],distinct:2,doc:8,docs_requir:8,doe:0,dot:4,download:8,dpi:4,draw:4,draw_box:4,drawn:4,dtype:4,dynamic_load:1,each:[1,4,5],either:[4,5],element:4,encapsul:[4,6],encapsulatng:3,encod:6,end:4,entri:4,environ:8,equal:4,everytim:5,exampl:[4,8],except:4,exist:[3,4],expose:1,extend:3,extens:0,extra:8,extract:[1,3],extractor:3,extran:4,factori:5,fals:[1,2,4,5],featur:1,feature_dim:1,feature_extractor:3,feature_lay:1,feature_match:3,feature_subset:3,few:8,file:[0,4,5,6,8],filenam:[0,4,6],fill:4,find:[2,4],find_chessboard:4,find_contour:4,finit:4,finite_pixel:4,first:[4,5],focal:0,focu:4,foreground:[2,4],foreground_mask:4,form:3,format:4,found:[4,8],fraction:4,frame:[0,3,4,5,6],free:4,from:[0,1,2,4,5,8],from_fram:4,front_thresh:4,full:3,furthermor:8,futur:3,g_data:4,gener:[0,3,4,8],get:[3,4],get_point_index:3,giant:3,git:8,github:8,given:[0,4,5,6],global:3,grad_thresh:4,gradient:4,graph:1,graspabl:3,grayscal:4,greater:4,green:[4,5],greyscal:4,guid:7,had:4,have:[0,4,5],height:[0,1,2,4],highli:8,histogram:[3,4],howev:8,hsv:4,html:8,hue:4,hue_weight:4,identifi:[2,4],ignor:4,ignore_black:4,ij_to_linear:4,im_height:1,im_width:1,imag:[0,1,2,3,4,5],image_arr:1,imagecoord:0,implement:[3,4],inch:4,includ:4,increas:[4,5],ind:4,index:[3,4,5,6,7],index_map:3,indic:[3,4,5],individu:4,inf:4,infinit:0,initi:[3,4,5],initial:[0,5],inpaint:4,input:[0,1],instal:8,install:8,installat:[],instead:5,instruct:8,instruction:[],integ:5,interact:5,interest:2,interfac:5,interp:4,interpol:4,interpret:4,intr:[0,5],intrins:[0,2,5],ioerror:5,ir_:5,ir_fram:5,ir_intrins:5,is_run:5,is_same_shap:4,item:4,jpg:4,kei:3,keypoint:3,keyword:4,kinect2:5,kinect2_num:5,kinect2depthmod:5,kinect2packetpipelinemod:5,kinect2registrationmod:5,kinect:5,kmean:[2,4],kwarg:4,label:4,lanczo:4,largest:[1,4],latest:5,layer:1,left_boundari:4,leftmost:4,length:0,less:[1,4],level:4,linear:4,linear_ind:4,linear_to_ij:4,list:[2,3,4],load:[0,4],load_data:4,local:3,locat:[0,4],lower:4,lower_boundari:4,magnitud:4,mai:4,make:[3,4,8],manag:[1,3],mani:2,manner:8,map:3,mask:[2,4],mask_binari:4,mask_by_ind:4,mask_by_linear_ind:4,match:[1,3,4],matrix:[0,3,4],max_area:4,maximum:4,mean:[0,4],median:[4,5],median_depth_img:5,median_imag:4,memori:[1,3],meshpi:4,meters:5,method:[2,4],millimeters:5,min_area:4,min_mag:4,minimum:4,mmatl:8,mode:[4,5],model:[0,4],model_dir:1,modifi:[3,4],modul:[7,8],most:4,most_free_pixel:4,move:4,multi:3,must:[1,4,5],name:[1,5],ndarrai:[0,1,3,4,5],nearest:[0,3,4],neighbor:3,newli:4,next:5,nice:3,non:4,none:[0,1,2,3,4,5],nonzero:4,nonzero_data:4,nonzero_hsv_data:4,nonzero_pixel:4,norm_thresh:3,normal:[2,3,4],normal_cloud_im:4,normalcloud:4,note:1,notimplementederror:4,npy:[4,5],npz:4,num:5,num_clust:4,num_imag:1,num_img:5,num_match:3,number:[1,3,4,5],numpi:[0,1,3,4,5],nx2:4,nx3:3,nxc:4,nxhxwxc:1,obj:[1,3],obj_kei:4,object:[0,1,2,3,4,5],onli:[3,4],onto:0,open:[1,3,4],open_sess:1,opencv:4,opengl:5,oper:4,optic:0,option:4,optional:2,order:4,orient:3,origin:[0,4],other:[1,4,8],other_im:4,otherwis:[4,5],our:8,out:4,output:[1,4,6],output_fil:6,output_lay:1,output_path:4,outsid:4,outward:3,overlap:4,own:4,packet:5,packet_pipeline_mod:5,page:[7,8],pair:[2,4],param:[3,4],paramet:[0,1,2,3,4,5,6],paramt:1,pass:5,path:[5,8],path_to_imag:5,pdf:4,per:[4,6],percentag:4,percentil:4,percept:[],perform:4,pip:8,pixel:[0,2,4],place:4,plane:[0,3],plugin:8,png:[4,5],point:[0,2,3,4],point_cloud:0,point_normal_cloud:[2,4],pointcloud:[0,4],pointnormalcloud:[2,4],pointwis:3,poorli:4,pose:[3,4],posit:4,possibl:[1,2],pre:[3,5],predict:1,proceed:8,process:[5,6],proj_matrix:0,project:[0,2],project_to_imag:0,projet:0,properli:4,prune:4,prune_contour:4,purpos:5,pylibfreenect2:8,pyplot:4,python:8,queri:2,query_im:2,r_data:4,radiu:4,raidu:4,rais:[0,4,5],rang:4,raw_data:4,read:4,real:5,rear_thresh:4,reason:3,recent:4,recommend:8,record:6,red:[4,5],refer:[0,3,4,5],reference_fram:3,regardless:4,regist:5,registr:[3,5],registration_mod:5,rel:4,relev:[2,3],remov:[2,4],renam:4,render:4,rep:3,replac:[4,5],replace_zero:4,repo:8,repositori:[],repres:[0,4],requir:[1,5,8],rescal:[0,4],rescale_factor:4,reseg:2,reset:5,resid:[4,5],resiz:[0,4],resolut:[4,6],restart:5,result:2,resut:4,retriev:5,rgb:4,rgb_weight:4,rgbd_sensor:5,rid:4,right_boundari:4,rightmost:4,rigid:4,rigidtransform:[3,4],robot:7,rotat:4,round:0,round_px:0,row:[0,4],run:[5,8],runtimeerror:5,safeti:5,sake:3,same:[0,4],save:[0,1,4,6],savefig:4,scale:[0,4],search:7,second:[4,5,6],segmask:2,segment:4,segment_kmean:4,segmentationimag:[],sensor_typ:5,seri:5,session:[1,3],set:[0,1,2,3,4,5,7,8],setup:8,shape:[3,4],shot:3,should:[1,4,5],signatur:3,simpli:[5,8],singl:[0,4],size:[1,4],skew:0,skip:5,skip_registr:5,smaller:4,some:[3,4],soon:4,sourc:[3,8],source_norm:3,source_normal_cloud:3,source_obj:3,source_obj_featur:3,source_point:3,source_point_cloud:3,spatial:4,specif:[5,8],specifi:[1,2,4,5],speed:4,sphinx:8,spuriou:2,squar:4,squeez:4,stabl:4,stable_pos:4,stablepos:4,start:[4,5,6],start_record:6,step:[4,5],stop:[5,6],stop_record:6,store:5,str:[0,1,3,4,5,6],stream:5,string:4,struct:2,subclass:3,subset:3,subtract:2,support:[1,4],surfac:3,svg:4,t_camera_world:4,t_obj_camera:4,take:4,taken:4,target:[3,8],target_norm:3,target_normal_cloud:3,target_obj:3,target_obj_featur:3,target_point:3,target_point_cloud:3,task:7,tensorflow:[1,3,8],test:[],than:[1,4],theta:4,thi:[0,4,5,7,8],third:4,three:[4,5],thresh_pctil:4,threshold:[3,4],threshold_gradi:4,threshold_gradients_pctil:4,thumbnail:2,titl:4,to_binari:4,to_color:4,to_float:4,to_fram:4,to_grayscal:4,to_normal_cloud:4,to_point_cloud:4,todo:4,toler:4,top:4,total:3,train:1,transform:4,translat:4,tupl:[4,5,6],turn:4,two:[3,4],txt:8,type:[0,1,2,3,4,5],uint16:4,uint8:4,uniformli:4,unit:5,unmask:2,unspecifi:4,unsupport:4,until:4,upper:4,upper_boundari:4,usb:[5,6],use:3,use_default_weight:1,use_hsv:4,val:4,valid:[0,3],valu:[0,1,4],valueerror:[0,4],vector:[3,4],view:3,virtual:[4,5],vis_foreground:2,vis_segment:2,visual:4,web:8,websit:8,weight:[1,4],welcom:7,when:[4,8],where:[4,5],wherev:4,whether:[1,4],which:[4,5,8],white:4,whose:4,width:[0,1,2,4],win_siz:4,window:[0,2,4],within:[2,4],word:3,world:4,wrap:2,wrapper:[1,3,4],write:[4,6],xvid:6,yamlconfig:[1,2,5],yellow:4,yet:1,you:[3,8],your:8,zero:[0,4,5],zero_pixel:4},titles:["Camera Intrinsics","Convolutional Neural Networks","Detection","Features","Image Classes","RGBD Sensors","Video Classes","Berkeley AutoLab Perception Documentation","Installation Instructions"],titleterms:{"class":[4,6],alexnet:1,autolab:7,bagoffeatur:3,berkelei:7,binaryimag:4,build:8,camera:0,cameraintrins:0,clone:8,cnnbatchfeatureextractor:3,cnnreusablebatchfeatureextractor:3,colorimag:4,convolut:1,correspond:3,depend:8,depthimag:4,detect:2,document:[7,8],featur:3,featureextractor:3,featurematch:3,globalfeatur:3,grayscaleimag:4,image:4,indice:7,installat:8,instruction:8,intrinsic:0,irimage:4,kinect2sensor:5,kinect2sensorfactori:5,localfeatur:3,mvcnnfeatur:3,network:1,neural:1,normalcloudimag:4,normalcorrespond:3,objectrend:4,percept:7,pointcloudimag:4,pointtoplanefeaturematch:3,rawdistancefeaturematch:3,rendermod:4,repositori:8,rgbd:5,rgbddetect:2,rgbddetector:2,rgbdforegroundmaskdetector:2,rgbdforegroundmaskqueryimagedetector:2,rgbdsensor:5,segmentationimag:4,sensor:5,shotfeatur:3,tabl:7,test:8,video:6,videorecord:6,virtualkinect2sensor:5}})