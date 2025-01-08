package com.team4.teamproject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Store {
	private int store_id;
	private String group_name;
	private String store_name_kr;
	private String store_name_en;
	private String address;
	private String tel_number;
	private String image_url;
	private String content;
	private int store_area_id;

}
