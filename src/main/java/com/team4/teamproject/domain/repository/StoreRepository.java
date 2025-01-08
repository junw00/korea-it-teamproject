package com.team4.teamproject.domain.repository;

import org.apache.ibatis.annotations.Mapper;

import com.team4.teamproject.domain.Store;

import java.util.List;
@Mapper
public interface StoreRepository {

  Store getStore(int store_id) throws Exception;

  List<Store> getStoreList(int area_id) throws Exception;
}
