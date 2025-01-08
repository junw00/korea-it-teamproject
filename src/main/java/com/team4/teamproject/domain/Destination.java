package com.team4.teamproject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Destination {
	private int destination_id;
	private String group_name;
	private String destination_name_kr;
	private String destination_name_en;
	private String address;
	private String image_url;
	private String content;
	private int destination_area_id;
	

}
